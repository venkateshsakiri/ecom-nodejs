const express = require('express');
const routes = express.Router();
const usersCntrl = require('../controllers/usersCntrl');
const categoryCntrl = require('../controllers/categoryCntrl');

routes.post('/auth/register',usersCntrl.registerUser);
routes.post('/auth/login',usersCntrl.loginUser);

routes.post('/admin/category',categoryCntrl.addCategory);





module.exports = routes;