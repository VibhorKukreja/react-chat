/**
 * Created by Vibhor on 23/10/16.
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
io.on('connection', function (socket) {
    socket.on('new-message', function (data) {
        io.sockets.emit('append-message', data);
    });
});