const server = require('./server')
var expect = require('chai').expect;

describe('Servidor', () => {
  it('Se pide un puerto para iniciar el servidor', () => {
    server.start({
        repo: {}
    }).then((err,response)=> {
        expect(err).to.exist
            .and.be.instanceof(Error)
            .and.have.property('message','El servidor debe iniciarse con un puerto disponible')
    })
  })

  it('Se pide un repositorio para iniciar el servidor', () => {
    server.start({
        port: {}
    }).then((err,response)=> {
        expect(err).to.exist
            .and.be.instanceof(Error)
            .and.have.property('message','El servidor debe iniciarse con un repositorio conectado')
    })
  })
})