const { EventEmitter } = require('events')
const server = require('./server/server')
const socket = require('./server/socket')
const config = require('./config/')
const repository = require('./repository/repository')
const mediator = new EventEmitter()

//Lectores de eventos
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
    let rep
    repository.connect(db).then(repo => {
        console.log("Conexión finalizada. Iniciando servidor...")
        rep = repo
        return server.start({
            port: config.serverSettings.port,
            repo: rep
        })
    }).then(app => {
        console.log("Servidor corriendo en :", config.serverSettings.port)
        app.on('close', () => {
            rep.disconnect();
        })

    })

    socket.start(config.socketSettings).then(socket => {
        console.log('Sockets corriendo en :', config.socketSettings.port)
    })

})

//finalizar inicio
config.db.connect(config.dbSettings, mediator)
mediator.emit('boot.ready')