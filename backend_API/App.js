var express=require('express');
var app=express();
var mongoose=require('mongoose');
var url = 'mongodb://127.0.0.1:27017/todo';
var cors=require('cors');
var bodyParser=require('body-parser');
var port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url,function(err){
    if(err){
        console.log(err); 
        console.log('error');
    }
    else{
        console.log(`connected to MongoDB`)
    }
});

var router=require('./Route/Route');
app.use('/todos',router)

app.listen(port,()=>{
    console.log(`Server is Listening in port ${port}`)
})
