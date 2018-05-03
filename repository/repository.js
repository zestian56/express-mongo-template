// repository.js
const repository = (db) => {

    const collection = db.collection('equipo')

    const disconnect = () => {
      db.close()
    }
    const paconic = () =>{
      console.log("ayylmao")
    }

    return Object.create({
      disconnect,
      paconic
    })
  }
  
  const connect = (connection) => {
    return new Promise((resolve, reject) => {
      if (!connection) {
        reject(new Error('connection db not supplied!'))
      }
      resolve(repository(connection))
    })
  }

  module.exports = Object.assign({}, {connect})