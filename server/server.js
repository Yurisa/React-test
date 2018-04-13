const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.end("lalalala")
})
app.listen(9093, function(){
    console.log("listen at port 9093")
})