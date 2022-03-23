module.exports = (req, res)=>{
  res.render("register", {
    errors:req.flash("registrationError"),
    data:req.flash("data")[0]//massiv qaytargani un 0 ni olamiz
  })
}