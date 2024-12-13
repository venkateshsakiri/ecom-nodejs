const express = require('express');
const routes = express.Router();
const usersCntrl = require('../controllers/usersCntrl');

routes.post('/auth/register',usersCntrl.registerUser);
routes.post('/auth/login',usersCntrl.loginUser);







module.exports = routes;