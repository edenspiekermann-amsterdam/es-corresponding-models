// This is a small (while getting bigger and bigger) helper to develop Contentful models by
// using the Contentful SDK. By default, creating new models and updating them afterwards
// is not a trivial thing. It is however what you need when developing models.


// TODO
// - This needs a warning if the rc-file cannot be found
// - Models need a final save, this needs to be done by hand via the web UI now


const contentful = require('contentful')
const secrets = require('./secrets.js')
const os = require('os')
const fs = require('fs')


let rawConfig = fs.readFileSync(os.homedir() + '/.contentfulrc.json')
let contentfulConfig = JSON.parse(rawConfig)
let existingContentType

const client = contentful.createClient({
  space: contentfulConfig.activeSpaceId,
  accessToken: secrets.CONTENTFUL_DELIVERY_TOKEN,
  environment: contentfulConfig.activeEnvironmentId,
})

module.exports.createOrEditContentType = async ({
  migration,
  type,
  name,
  description,
  fields,
}) => {
  try {
    existingContentType = await client.getContentType(type)
  } catch (e) {
    existingContentType = null
  }

  var contentType
  var fieldMethod
  let existingFields = {}

  if (existingContentType) {
    console.log(type, 'present, modifying existing model')
    contentType = await migration.editContentType(type)
    for (var i = 0; i < existingContentType.fields.length; i++) {
      existingFields[existingContentType.fields[i].id] =
        existingContentType.fields[i]
    }
  } else {
    console.log(type, 'not found, creating brand new model')
    contentType = await migration.createContentType(type)
  }

  contentType.name(name).description(description)

  for (var fieldName in fields) {
    if (fieldName in existingFields) {
      console.log('Editing field', fieldName)
      fieldMethod = 'editField'
    } else {
      console.log('Adding field', fieldName)
      fieldMethod = 'createField'
    }
    const field = await contentType[fieldMethod](fieldName)

    for (var spec in fields[fieldName].specs) {
      console.log('Setting spec', spec, '=', fields[fieldName].specs[spec])

      await field[spec](fields[fieldName].specs[spec])
    }

    for (var setting in fields[fieldName].settings) {
      console.log('Set', setting, '=', fields[fieldName].settings[setting])

      contentType.changeEditorInterface(
        fieldName,
        fields[fieldName].widgetId,
        fields[fieldName].settings[setting]
      )
    }
  }
}
