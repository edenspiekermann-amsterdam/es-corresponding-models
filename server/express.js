const express = require('express')
const next = require('next')
const routes = require('../src/router/next-routes.js')

const isProduction = process.env.NODE_ENV === 'production'

const HOST = '0.0.0.0'
const PORT = 8080
const app = next({dev: !isProduction})
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
    const server = express()
    server.use(handler)
    server.listen(PORT, HOST, err => {
        if (err) throw err
        console.log(`> Ready on http://${HOST}:${PORT}`)
    })
})
