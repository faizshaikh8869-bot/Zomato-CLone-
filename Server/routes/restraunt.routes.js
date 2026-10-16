import { Router } from "express";
const restrauntRoute = Router();
        const {name, address, city, phoneNumber }= req.body;


restrauntRoute.route('/register')
    .post(handleRegistration)

restrauntRoute.route('/food')
    .get(handleGetFoodItems)
    .post(handleAddFood)
    .delete(handleDeleteFood);

restrauntRoute.get('/food/:id', handleViewItem);

export default restrauntRoute;