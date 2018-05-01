const express = require('express')
const api = require('../api/api')

const start = (options) => {
  return new Promise((resolve, reject) => {
    const app = express()


    app.use((err, req, res, next) => {
      reject(new Error('Error!, err:' + err))
      res.status(500).send('Error del servidor!')
    })

    api(app, options)
    const server = app.listen(options.port, () => resolve(server))

  })

}


module.exports = Object.assign({}, { start })
