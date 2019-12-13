const express = require("express");
const router = express.Router();
const Customer = require("../models/user.js");
router.get('/users',(req,res,next)=>{
      res.send({type:'GET'});
});

router.post('/users',(req,res,next)=>{
   Customer.create(req.body).then((user)=> {
        res.send(user);
    }).catch(next); 
    //res.send({msg:"Hello"});
});

router.put('/users/:id',(req,res,next)=>{
     Customer.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
           Customer.findOne({_id:req.params.id}).then((p)=> {
               res.send(p);
           }).catch(next);
     }).catch(next);
});
router.delete('/users/:id',(req,res,next)=>{
        Customer.findByIdAndRemove({_id:req.params.id},(u)=> {
                res.send(u);
        });
});



module.exports = router;