const { EventEmitter } = require('events')
const server = require('./server/server')
const config = require('./config/')
const repository = require('./repository/repository')
const mediator = new EventEmitter()


process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})

mediator.on('db.error', (err) => {
    console.error("DATABASE ERROR : " + err)
})

mediator.on('db.ready', (db) => {
    server.start({
        port: config.serverSettings.port,
        repo: 1000
    }).then(app => {
        console.log("servidor corriendo en " + config.serverSettings.port)
    })

})


config.db.connect(config.dbSettings, mediator)
mediator.emit('boot.ready')