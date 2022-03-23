const {Post} = require('../models');

module.exports = async (req,res)=>{
  const post = await Post.findById(req.params.id);
  res.render('post', {post});
}