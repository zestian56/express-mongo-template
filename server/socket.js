const express = require('express')


const start = (options) => {
    return new Promise((resolve, reject) => {
        const app = express();
        const httpServer = require('http').Server(app);
        const io = require('socket.io')(httpServer);

        const socketServer = httpServer.listen(options.port, () => {
            io.on('connection', (socket) => {
                console.log('Un cliente se ha conectado',socket.id);
                socket.on('contador', (data) => {
                    console.log(data)
                    socket.emit('contador',6)
                })
                socket.on('disconnect', function () {
                    console.log('Se fue el man ese');
                });
            })
            resolve(socketServer)
        })
    })

}


module.exports = Object.assign({}, { start })