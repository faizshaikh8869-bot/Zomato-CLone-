import { Router } from "express";
import { AuthMiddleWare, CheeckRole } from "../Middleware/user";
import { ROLE } from "../utils/constants";
const restrauntRoute = Router();
import {
    handdleGetAllRestraunts, 
    handleAddItemsInMenue, 
    handleChangesInSettings,

    handlePostComment,
    handleTableBooking,
    handleServingRestrauntInfo,

    handleRestrauntRegister
    
} from '../controllers/restraunt.Controller.js'


// Owner
//Geolocation Will be taken At the time of registeration ----->From Client
restrauntRoute.post('/register', AuthMiddleWare, CheeckRole(ROLE.USER, ROLE.ADMIN), handleRestrauntRegister );
restrauntRoute.post('/add-menu', AuthMiddleWare, CheeckRole(ROLE.RESTRAUNT_OWNER, ROLE.ADMIN), handleAddItemsInMenue );
// Add Of the Menue Items And Delete will be handled with this route only 
restrauntRoute.post('/update-restraunt-settings', AuthMiddleWare,CheeckRole(ROLE.RESTRAUNT_OWNER, ROLE.ADMIN), handleChangesInSettings ); 
// Here The Address PhoneNumber and Tables All this thigs Can be change with this route

// User
restrauntRoute.post('/comment', AuthMiddleWare, handlePostComment);
restrauntRoute.post('/bookTable', AuthMiddleWare , handleTableBooking );

restrauntRoute.get('/restraunts', handdleGetAllRestraunts); // Here Pagination will be added
restrauntRoute.get('/restraunts/:restraintID', handleServingRestrauntInfo);


export default restrauntRoute;