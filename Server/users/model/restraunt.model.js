const mongoose = require('mongoose');

//I am coming to write the db before building a project :- Library Management System
const restraunt = new mongoose.Schema({
    restaurantName:String,
    numberOfPlaces:Number,
    image:String,
    places:{
        type:Object,

    }    
})