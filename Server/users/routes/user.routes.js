const express =require('express');
const routes =express.Router();

const { registerUser, makeRefreshToken, loginUser,logoutUser, getUserProfile } = require('../controllers/user.controller.js');


//Signin routes
routes.post('/register', registerUser);

routes.post('/refresh', makeRefreshToken);

routes.post('/login', loginUser);

routes.get('/profile', getUserProfile );

routes.get('/logout', logoutUser);




module.exports=routes