'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const { repo } = options

  app.get('/equipo', (req, res, next) => {
    
    repo.getEquipoActivo().then(equipo => {
      res.status(status.OK).json(equipo)
    }).catch(next)
  })

  app.get('/historial', (req, res, next) => {
    repo.getHistorial().then(equipos => {
      res.status(status.OK).json(equipos)

    }).catch(next)
  })
}