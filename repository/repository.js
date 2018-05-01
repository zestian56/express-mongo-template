// repository.js
const repository = (db) => {
  
    // since this is the movies-service, we already know
    // that we are going to query the `movies` collection
    // in all of our functions.
    const collection = db.collection('Equipo')
    // this will close the database connection
    const disconnect = () => {
      db.close()
    }
  
    return Object.create({
      disconnect
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
  // this only exports a connected repo
  module.exports = Object.assign({}, {connect})