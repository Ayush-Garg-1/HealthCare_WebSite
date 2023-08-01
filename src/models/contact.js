const mongoose = require("mongoose");
const validator = require('validator')

// create Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
            validate: {
              validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
              },
              message:'{VALUE} is not a valid email!'
            }
    },
    phone:{
        type:Number,
        required:true,
        validate:{
            validator:function(v){
                return /^[0-9]{10}/.test(v);
            },
            message:`it is not a valid number`
        }
    },
    date:{
        type:String,
        required:true,
    },
    dtype:{
        type:String,
        required:true
    }
});

// Create collection
const Clint = new mongoose.model("Clint",UserSchema);

// export our collection
module.exports = Clint;