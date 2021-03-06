const dbSettings = {
  db: process.env.DB || 'equipo',
  user: process.env.DB_USER || 'admin',
  pass: process.env.DB_PASS || '123',
  servers: [
    {ip:"localhost", port: "27017"}
  ]
};

const serverSettings = {
  port: process.env.PORT || 3000
}

const socketSettings = {
  port: process.env.SOCKET_PORT || 3500
}

module.exports = Object.assign({}, { dbSettings, serverSettings, socketSettings})


