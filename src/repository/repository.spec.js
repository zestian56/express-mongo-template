
const repository = require('./repository')
var expect = require('chai').expect;

describe('Repositorio', () => {
  it('Conexión con una promesa', (done) => {
    expect(repository.connect({})).to.be.a('promise');    
    done()
  })
})