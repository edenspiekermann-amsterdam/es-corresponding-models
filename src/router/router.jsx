const routesList = require('./routes-list.js').routesList

// Find the route name given a url
export const getRouteName = url => {
  routeLoop: for (const routeName in routesList) {
    const route = routesList[routeName]
    const urlParts = url.split('/')
    const routeParts = route.split('/')

    // For a match we need an equal length
    if (urlParts.length != routeParts.length) continue
    urlParts.shift()
    routeParts.shift()
    for (var i = 0; i < urlParts.length; i++) {
      if (urlParts[i] != routeParts[i] && routeParts[i].charAt(0) != ':') {
        continue routeLoop
      }
    }
    return routeName
  }
  return 'routeNameNotFound'
}
