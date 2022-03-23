const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = mongoose.Schema({
  username:{
    type:String,
    required:["Please, Enter your UserName"]
  }, 
  email:{
    type:String,
    required:[true,"Please, Enter your Email"],
    unique:true
  },
  password:{
    type:String,
    required:[true,"Please, Enter your UserName" ] 
  }
});

module.exports = mongoose.model("User",UserSchema);
