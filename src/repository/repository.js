// repository.js
const repository = (db) => {

  const collection = db.collection('historial')

  const disconnect = () => {
    db.close()
  }
  const getEquipoActivo = () => {

    return new Promise((resolve, reject) => {
      resolve({paco:true,mateo:false})
      const projection = { _id: 0, estaActivo: 0, "equipo.cruces": 0 }
      const sendEquipo = (err, equipo) => {
        if (err) {
          reject(new Error(`No se encontró ningún equipo activo, err: ${err}`))
        }
        else {

          resolve(equipo)
        }

      }
      collection.findOne({ estaActivo: true }, projection, sendEquipo)
    })

  }
  const getHistorial = () => {
    return new Promise((resolve, reject) => {
      const equipos = []
      const cursor = collection.find({}, { _id : 0})
      const addEquipo = (equipo) => {
        equipos.push(equipo)
      }
      const sendEquipos= (err) => {
        if (err) {
          reject(new Error('Ocurrio un error obteniendo el historial, err:' + err))
        }
        resolve(equipos.slice())
      }
      cursor.forEach(addEquipo, sendEquipos)
    })
  }
  const getCruces = () => {

  }
  const getCruceById = (id) => {

  }
  const getGrupos = () => {

  }
  const getGrupoById = () => {

  }
  const getFlujos = () => {

  }
  const getFlujoById = () => {

  }
  const getEstructuras = () => {

  }
  const getEstructuraById = () => {

  }


  return Object.create({
    disconnect,
    getEquipoActivo,
    getHistorial
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

module.exports = Object.assign({}, { connect })