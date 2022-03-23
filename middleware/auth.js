const {User} = require('../models');

module.exports = (req, res, next)=>{
  console.log(req.body);
  User.findById(req.session.userId, (err, user)=>{
    if(err || !user){
      return res.redirect('/login');
    }
    next(); 
  })
}