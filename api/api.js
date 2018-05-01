'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const { repo } = options

  app.get('/equipo', (req, res, next) => {
    res.send('Equipo')
  })
}