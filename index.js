const express = require("express");
const bodyParser = require("body-parser");
const mongoose =  require("mongoose")

const mongoURL = "mongodb+srv://madrigal1:earthbull1100@todolist-oi8yk.mongodb.net/test?retryWrites=true&w=majority";

//setting up express
const app = express();

//connect to mododb
mongoose.connect(mongoURL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
   }).then(() => {
       console.log("Connected");
   });
mongoose.Promise =global.Promise;

//bodyParser middle ware
app.use(bodyParser.json());

//route handling
app.use('/api',require('./routes/api.js'));

//error handling middleware
app.use((err,req,res,next)=> {
  res.status(422).send({error:err.message});
});

//server
app.listen(process.env.PORT || 4000,()=> {
    console.log("Server running !");
});