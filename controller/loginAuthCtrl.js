const{ User} = require('../models');
const bcrypt = require('bcrypt');

module.exports = (req, res)=>{
  const {password, email} = req.body;
  User.findOne({email},async(err,user)=>{
    if(user){
      const validPassword = await bcrypt.compare(password, user.password);
      if(validPassword){
        console.log(user)
        req.session.userId = user._id;
        res.redirect('/')
      }
      else{res.redirect('/login')}
    }
    else {
      res.redirect('/login');
      console.log(err);
    }
  })
}