var mongoose=require('mongoose');

let newSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    response:{
        type:String,
        required:true
    },
    piriority:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('todo',newSchema)