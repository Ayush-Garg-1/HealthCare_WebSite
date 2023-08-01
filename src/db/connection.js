// required mongoose 
const mongoose = require("mongoose");

// Make connection b/w mongodb and node-Js
mongoose.connect("mongodb://localhost:27017/healthcare")
.then(()=>{
    console.log("Mongodb Is Connected Successfully....");
}).catch((e)=>{console.log(`No Connection ${e}`)});