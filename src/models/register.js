const mongoose = require("mongoose");

// create Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
});

// Create collection
const User = new mongoose.model("User",UserSchema);

// export our collection
module.exports = User;