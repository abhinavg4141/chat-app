let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static('public'))


let users = [];

app.get('/', (req, res) => {
  res.redirect("index.html");
});

io.on('connection', (socket) => {
   

    socket.on('user',function(data){
         let newUser = {
           id:socket.id,
           name:data
         }
         users.push(newUser);
         socket.broadcast.emit('user-joined',newUser);
    })

    socket.on('msg',function(data){
      socket.broadcast.emit('user-msg',data);
    })
     
    socket.on('disconnect',function(){
      let userObj = users.filter(function(data){
        return data.id == socket.id;
      })

       if(userObj){
         socket.broadcast.emit('user-leave',userObj[0].name);
       }
       
      users = user.filter(function(userObj){
          return userObj.id != socket.id;
      })
    })
});

let port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log('listening on *:3000');
});