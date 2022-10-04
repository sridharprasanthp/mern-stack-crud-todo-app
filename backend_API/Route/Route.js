var express=require('express');
var router=express.Router();
var todo=require('../model/Schema');

router.get('/',async(req,res)=>{
    var todos=await todo.find();
    res.json(todos);
});

router.get('/:id',async(req,res)=>{
    const todos=await todo.findById(req.params.id);
    res.json(todos);
})

router.post('/add',async(req,res)=>{
    var todos=await new todo({
        description:req.body.description,
        response:req.body.response,
        piriority:req.body.piriority
    });
    todos.save();
    res.json('Saved Successfully');
});

router.patch('/update/:id',async(req,res)=>{
    const todos=await todo.findByIdAndUpdate(req.params.id);
    todos.description=req.body.description;
    todos.response=req.body.response;
    todos.piriority=req.body.piriority;
    todos.save();
    res.json('Updated Successfully');
});

router.delete('/:id',async(req,res)=>{
    await todo.findByIdAndDelete(req.params.id);
    res.json('Deleted Successfully')
})

module.exports=router;