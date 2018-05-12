const { EventEmitter } = require('events')
const mongo = require('./mongo')
const { dbSettings } = require('./config')

describe('Mongo Connection', () => {
    it('Inicia en la base de datos y envia el event Emitter', (done) => {
        const mediator = new EventEmitter()

        mediator.on('db.ready', (db) => {
            done()
        })

        mediator.on('db.error', (err) => {
            done(err)
        })

        mongo.connect(dbSettings, mediator)

        mediator.emit('boot.ready')
    })
})