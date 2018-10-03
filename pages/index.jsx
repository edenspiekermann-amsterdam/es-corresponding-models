import { Component } from 'react'

import { AppMain } from '../src/app/main'
import { getRouteName } from '../src/router/router'
import { AppHead } from '../src/app/head'

import * as tools from '../src/app/tools'
import * as contentful from '../src/contentful/contentful'

import { StoreContext } from '../src/app/store'

import { homeModels } from '../src/layouts/layout-home'

import {
  saveFavouritesToLocalStorage,
  getFavouritesFromLocalStorage,
} from '../src/app/favourites'

const routeModels = {
  home: homeModels,
}

// Generic main app component
export default class App extends Component {
  static async getInitialProps({ req, pathname, asPath, query }) {
    const routeName = getRouteName(asPath)
    let data = { routeName }
    const initialPropsPromise = contentful.fetchComponentQueries({
      data,
      routeModels: routeModels[routeName],
      urlParameters: query,
    })
    return initialPropsPromise
  }

  constructor(props) {
    super(props)

    this.state = {
      favourites: getFavouritesFromLocalStorage(),
      layoutName: null,
      Layout: null,
    }

    this.toggleFavourite = this.toggleFavourite.bind(this)
  }

  toggleFavourite = favouriteId => {
    const newFavourites = Object.assign({}, this.state.favourites)
    if (favouriteId in newFavourites) delete newFavourites[favouriteId]
    else newFavourites[favouriteId] = true

    this.setState({
      favourites: newFavourites,
    })
    saveFavouritesToLocalStorage(newFavourites)
  }

  render() {
    const appHandlers = {
      toggleFavourite: this.toggleFavourite,
    }
    // Do not connect the layout twice
    let Layout
    const renderLayout = routeModels[this.props.routeName][0].model
    const lastLayoutName = this.state.layoutName
    if (!lastLayoutName || lastLayoutName != renderLayout.modelName) {
      this.state.layoutName = renderLayout.modelName
      this.state.Layout = contentful.connect(renderLayout)
    }

    return (
      <StoreContext.Provider value={this.props}>
        <AppHead {...this.props.htmlHead} />
        <AppMain>
          <this.state.Layout appHandlers={appHandlers} appState={this.state} />
        </AppMain>
      </StoreContext.Provider>
    )
  }
}
