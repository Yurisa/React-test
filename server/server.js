const express = require('express')
const userRouter = require('./user')


const app = express();
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
app.listen(9093, function(){
    console.log("listen at port 9093")
})