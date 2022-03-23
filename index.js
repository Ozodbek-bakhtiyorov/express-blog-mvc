require("colors");
require("dotenv").config({ path: "./config/config.env" });

const express = require("express");
const path = require("path");


//middlewes import
const {validatePostMiddleware, authMiddleware, redirectIfAuth} =  require('./middleware');
const ExpressEdge = require("express-edge");
const fileUpload = require("express-fileupload");
const expressSession = require('express-session');

const MongoStore= require('connect-mongo');

const app = express();
const connectFlesh = require("connect-flash");

//conncet to MongoDb
require('./utils/connectMondoDb');

//controllers
const {
  getPostsController,
  getSinglePost,
  createCtrl,
  addPostCtrl,
  createUserCtrl, 
  userStoreCrl,
  loginCtrl, loginAuthCtrl,
  logoutCtrl
} = require("./controller");


//Middlevares;
app.use(expressSession({
  secret:"ozodbek",
  store: MongoStore.create({mongoUrl:process.env.MONGODB_URI})
}))
app.use(express.static("public"));
app.use(ExpressEdge.engine);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/posts/create', validatePostMiddleware); 
app.use(fileUpload());
app.use(connectFlesh());


//settings
app.set("views", path.join(__dirname, "views"));

app.use("*",(req, res,next)=>{
  app.locals.auth = req.session.userId;
  next();
})//expressda global o'zgaruvchi e'lon qilish;

//get Methods
app.get("/", getPostsController);
app.get("/post/:id", getSinglePost);

app.get("/posts/new",authMiddleware,createCtrl);
app.post("/posts/create",addPostCtrl);


app.get("/register",redirectIfAuth,createUserCtrl);
app.post("/auth/register", userStoreCrl);

app.get('/login',redirectIfAuth, loginCtrl);  
app.post("/auth/login",loginAuthCtrl)

app.get('/logout',authMiddleware,logoutCtrl);

app.use((req, res)=>res.render("not_found"));
//server Listener 
require('./utils/serverListener')(app);
