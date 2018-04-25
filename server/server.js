const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const model = require('./model')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const Chat = model.getModel('chat')
const User = model.getModel('user')

io.on('connection', function(socket){
    // console.log('user login');
    socket.on('sendmsg', function(data){
        const {from, to, msg} = data
        const chatid = [from, to].sort().join('_')
        Chat.create({chatid, from, to, content:msg}, function(err, doc){
           io.emit('recvmsg', Object.assign({}, doc._doc))                    
        })
    })
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.get('/api', function(req, res){
    res.end("lalalala")
})
app.get('/api/data', function(req, res){
    const data = {
        isAuth:false,
        user:'admin',
        age:33
    }
    res.json(data)
})
server.listen(9093, function(){
    console.log("listen at port 9093")
})