var mongoose = require('mongoose');

var auth = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model("Login" , auth);