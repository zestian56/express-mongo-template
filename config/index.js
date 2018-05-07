const {dbSettings, serverSettings,socketSettings} = require('./config')
const db = require('./mongo')

module.exports = Object.assign({}, {dbSettings, serverSettings,socketSettings, db})