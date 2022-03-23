require('dotenv').config({path:'./config/config.env'})
const mongoose = require("mongoose");
const Post = require('./models/Post');

mongoose.connect(process.env.MONGODB_URI,err=>{
  if(!err){
    console.log('MongoDB connected successfully...'.yellow);
  }
  else{
    console.log(`Error with Mongodb connection ${err.message}`.bgWhite.red)
  }
})

// Post.create({
//   title:"My Firs Blog",
//   description:"About BBC News",
//   content:"Hi"
// },(err, post)=>{ console.log(err?err:post)})

Post.findByIdAndUpdate("61e8336ff12f9cb10715de40",{
  title:"bla bla",
  description:"shasdfadadasd",
  content:"Hi"
}, (err,post)=>{
  console.log(err?err:post);
})

// Post.find({},(err,post)=>{console.log(post)})