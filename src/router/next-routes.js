const routes = (module.exports = require('next-routes')())

const routesList = require('./routes-list.js').routesList

for (var key in routesList) {
  routes.add({
    name: key,
    pattern: routesList[key],
    page: 'index'
  })
}
