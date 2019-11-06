var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/pixi.min.js', function(req, res){
    res.sendFile(__dirname + '/pixi.min.js');
});
app.get('/cat.png', function(req, res){
    res.sendFile(__dirname + '/cat.png');
});

io.on('connection', function(socket){
    socket.on('move', function(msg){
        console.log('message: ' + msg);
        io.emit('move', msg);
    });
    socket.on('create', function(msg){
        console.log('message: ' + msg);
        io.emit('create', msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});