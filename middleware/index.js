const validatePostMiddleware = require('./validatePostMiddleware');
const authMiddleware = require('./auth');
const redirectIfAuth = require('./redirectIfAuth')
module.exports = {
  validatePostMiddleware,
  authMiddleware,
  redirectIfAuth
}