// repository.js
const repository = (db) => {

    const collection = db.collection('equipo')

    const disconnect = () => {
      db.close()
    }
    const getEquipo = () =>{

    }
    const getCruces = () =>{
      
    }
    const getCruceById = (id) =>{
      
    }
    const getGrupos =() =>{

    }
    const getGrupoById =() =>{

    }
    const getFlujos = () =>{

    } 
    const getFlujoById = () =>{
      
    } 
    const getEstructuras = () =>{
      
    }
    const getEstructuraById = () =>{
      
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

  module.exports = Object.assign({}, {connect})