const express = require('express');
const routes = express.Router();

const UserController = require('./app/controllers/UserController')

routes.post('/createuser', UserController.createUser);
routes.post('/checkEmail', UserController.checkEmail);
routes.post('/forgotpassword', UserController.passwordForgotEmail);

module.exports = routes;