// React | contentful.js
import React from 'react'
import { createClient } from 'contentful'

import { StoreContext } from '../app/store'

import * as secrets from './secrets'
import * as tools from '../app/tools'

export const client = createClient({
  space: secrets.CONTENTFUL_SPACE_ID,
  accessToken: secrets.CONTENTFUL_DELIVERY_TOKEN,
  environment: secrets.ENVIRONMENT,
})

// Wrap model in store and provide model with props from
// store[Section.modelName]
export const connect = Model => props => (
  <StoreContext.Consumer>
    {store => (
      <Model
        {...props} // any additional static props and defaults
        {...store[Model.modelName]} // props from the store
      />
    )}
  </StoreContext.Consumer>
)

// Future improvements
//
// - First and foremost this needs better error handling. All this code runs
//   within a promise. Because of that the current errors are not very helpful.
//   This can easily be solved by adding a few try/catch blocks.
//
// - A model should have a cache property that tells the method below to chache
//   entries and for how long. Globals e.g. could be cached for days.
//
// - All models are loaded one by one. We can build up a tree of models so that
//   models on the same level can be loaded in parallel. This would greatly
//   improve page load speed.
//
// - What is the added value of adding a .response key? Especially when using
//   copyDataFrom this is a bit odd.
//
export const fetchComponentQueries = ({
  routeModels,
  urlParameters,
  locale = 'en-US',
  data = {},
}) => {
  let runModels = null
  for (let i = 0; i < routeModels.length; i++) {
    let runAnotherModel = () => {
      const model = routeModels[i].model
      let skipQueryForOptionalSection = false

      // Create copies of query and queryFields because they could be altered
      let query, queryFields
      if ('query' in model) {
        query = Object.assign({}, model.query)
        if ('fields' in model.query) {
          queryFields = Object.assign({}, model.query.fields)
        }
      }
      data[model.modelName] = {}

      // Handle queryIdFrom
      if (query && 'queryIdFrom' in routeModels[i]) {
        query.id = tools.parsePath({
          path: routeModels[i].queryIdFrom,
          data,
          allowPathNotFound: model.optionalSection,
        })
        // If this is an optional model, parsePath may return
        // PATH_NOT_FOUND. In that case we can safely skip the query.
        if (query.id == 'PATH_NOT_FOUND') skipQueryForOptionalSection = true
      }

      // Handle queryParametersFrom
      if ('queryParametersFrom' in routeModels[i]) {
        let parameters = Object.assign({}, routeModels[i].queryParametersFrom)

        for (let key in parameters) {
          if (parameters[key].startsWith('URL:')) {
            parameters[key] = urlParameters[parameters[key].substr(4)]
          } else {
            parameters[key] = tools.parsePath({
              path: parameters[key],
              data,
              allowPathNotFound: model.optionalSection,
            })
            // If this is an optional model, parsePath may return
            // PATH_NOT_FOUND. In that case we can safely skip the query.
            if (parameters[key] == 'PATH_NOT_FOUND')
              skipQueryForOptionalSection = true
          }
        }
        parseQueryFieldVariables({
          queryFields: queryFields,
          parameters: parameters,
        })
      }

      // Handle copyDataFrom
      if ('copyDataFrom' in routeModels[i]) {
        copyDataFrom({
          data,
          modelName: model.modelName,
          copyDataFrom: routeModels[i].copyDataFrom,
        })
      }

      // Handle setHtmlHeadFrom
      if ('setHtmlHeadFrom' in routeModels[i]) {
        setHtmlHeadFrom({
          data,
          setHtmlHeadFrom: routeModels[i].setHtmlHeadFrom,
        })
      }

      // Run query and chain promises
      let queryPromise = new Promise(function(resolve, reject) {
        if (query && queryFields && !skipQueryForOptionalSection) {
          const queryPromise = client[query.clientMethod](
            ...getClientParameters({
              locale,
              id: query.id,
              clientMethod: query.clientMethod,
              fields: queryFields,
            })
          )
          queryPromise.then(
            response => {
              if (query.adapter) {
                data[model.modelName].response = query.adapter(response)
              } else {
                data[model.modelName].response = response
              }
              resolve(data)
            },
            error => {
              reject(error)
            }
          )
        } else {
          // If we have no query to run, resolve right away
          resolve(data)
        }
      })

      return queryPromise
    }
    if (runModels) {
      runModels = runModels.then(runAnotherModel)
    } else {
      runModels = runAnotherModel()
    }
  }
  return runModels
}

const copyDataFrom = ({ data, modelName, copyDataFrom }) => {
  if (typeof copyDataFrom === 'string') {
    data[modelName].response = tools.parsePath({ path: copyDataFrom, data })
  }
  if (typeof copyDataFrom === 'object') {
    for (let key in copyDataFrom) {
      if (!(key in data[modelName])) data[modelName][key] = {}
      data[modelName][key].response = tools.parsePath({
        path: copyDataFrom[key],
        data,
      })
    }
  }
}

const setHtmlHeadFrom = ({ data, setHtmlHeadFrom }) => {
  for (let key in setHtmlHeadFrom) {
    if (!('htmlHead' in data)) data['htmlHead'] = {}
    if (typeof setHtmlHeadFrom[key] === 'string') {
      data['htmlHead'][key] = tools.parsePath({
        path: setHtmlHeadFrom[key],
        data,
      })
    }
    if (Array.isArray(setHtmlHeadFrom[key])) {
      let concatenatedValues = ''
      setHtmlHeadFrom[key].forEach(path => {
        if (concatenatedValues) concatenatedValues += ' - '
        concatenatedValues += tools.parsePath({ path, data })
      })
      data['htmlHead'][key] = concatenatedValues
    }
  }
}

// Create localized parameters for Contentful client
const getClientParameters = ({ locale, id, clientMethod, fields }) => {
  let parameters = []
  // If our method is getEntry, we need to supply the id parameter
  if (clientMethod == 'getEntry') parameters.push(id)
  if (!fields) fields = {}
  if (locale) fields['locale'] = locale
  parameters.push(fields)
  return parameters
}

// Replace named query variables with named (url) parameters
const parseQueryFieldVariables = ({ queryFields, parameters }) => {
  Object.keys(queryFields).forEach(key => {
    if (
      typeof queryFields[key] === 'string' &&
      queryFields[key].charAt(0) == ':' &&
      queryFields[key].substring(1) in parameters
    ) {
      queryFields[key] = parameters[queryFields[key].substring(1)]
    }
  })
}
