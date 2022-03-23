const getPostsController = require('./getPosts');
const getSinglePost = require('./getSinglePost');
const createCtrl = require('./createCtrl');
const addPostCtrl = require('./addPostCtrl');
const createUserCtrl = require('./createUserCtrl');
const userStoreCrl = require('./userStoreCtrl');
const loginCtrl = require('./loginCtrl')
const loginAuthCtrl = require('./loginAuthCtrl');
const logoutCtrl = require('./logoutCtrl')
module.exports = {
  getPostsController, 
  getSinglePost,
  createCtrl,
  addPostCtrl,
  createUserCtrl,
  userStoreCrl, 
  loginCtrl, 
  loginAuthCtrl, 
  logoutCtrl
} 