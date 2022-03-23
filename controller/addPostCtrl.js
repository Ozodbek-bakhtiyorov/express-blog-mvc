const { Post } = require("../models");
const path = require('path');
module.exports = (req, res) => {
  console.log('body:',req.body);
  const { image } = req.files;
  image.mv(path.join(__dirname,"..", "public/posts", image.name), (err) => {
    if (!err) {
      console.log(image);
      Post.create({...req.body, image: image.name,author:req.session.userId }, (err, post) => {
        if (err) console.log(err);
        else {
          res.redirect("/");
          console.log(post);
        }
      });
    } else throw err;
  });
};
