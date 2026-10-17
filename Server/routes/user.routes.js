import {Router} from 'express'
const routes = Router();

import { 
    registerUser, 
    makeRefreshToken, 
    loginUser, 
    logoutUser, 
    getUserProfile 
} from '../controllers/user.controller.js';
import { AuthMiddleWare } from '../Middleware/user.js';


//Signin routes
routes.post('/register', registerUser);
routes.post('/refresh', makeRefreshToken);

routes.post('/login', loginUser);
routes.get('/profile', AuthMiddleWare, getUserProfile);

routes.get('/logout', logoutUser);




export default routes;