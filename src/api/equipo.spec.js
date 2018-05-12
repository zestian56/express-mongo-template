const server = require('../server/server')
var request = require('supertest')
var expect = require('chai').expect;

describe('Api rest de equipo', () => {
    let app = null;
    let sampleEquipo = require('../models/equipo.json')
    let sampleEquipos = [require('../models/equipo.json'), require('../models/equipo.json')]
    let testRepo = {
        getEquipoActivo() {
            return Promise.resolve(sampleEquipo);
        },
        getHistorial() {
            return Promise.resolve(sampleEquipos);
        }
    }

    beforeEach(() => {
        return server.start({
            port: 3000,
            repo: testRepo
        }).then(serv => {
            app = serv
        })
    })

    afterEach(() => {
        app.close()
        app = null
    })

    it('Se logra extraer la configuración del equipo actual', (done) => {
        request(app).get('/equipo').expect(200, (err, res) => {
            if (err) { return done(err) }
            isActive = res.body.estaActivo
            expect(isActive).to.equal(true)
            done()
        })
    })
    it('Se logra extraer el historial de configuración ',(done) => {
        request(app).get('/equipo').expect(200, (err, res) => {
            if (err) { return done(err) }           
            done()
         })
    })
})