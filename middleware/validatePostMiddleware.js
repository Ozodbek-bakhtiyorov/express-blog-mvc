module.exports = (req, res, next) => {
  console.log(req.body)
  if (
    !(req.files && req.files.image) ||
    !req.body.title ||
    !req.body.description ||
    !req.body.content
  ) {
    return res.redirect("/posts/new");
  }
  next();
};