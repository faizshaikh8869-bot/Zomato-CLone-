import {Router} from 'express'
const routes = Router();

import { 
    registerUser, 
    makeRefreshToken, 
    loginUser, 
    logoutUser, 
    getUserProfile 
} from '../controllers/user.controller.js';
import { AuthMiddleWare, CheeckRole } from '../Middleware/user.js';
import { ROLE } from '../utils/constants.js';


//Signin routes
routes.post('/register', registerUser);
routes.post('/refresh', makeRefreshToken);

routes.post('/login', loginUser);
routes.get('/profile',AuthMiddleWare, CheeckRole , getUserProfile);

routes.get('/logout', logoutUser);




export default routes;