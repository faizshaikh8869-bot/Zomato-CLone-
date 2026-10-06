import mongoose from "mongoose";
import Food  from "./Foods.model";

//I am coming to write the db before building a project :- Library Management System
const restraunt = new mongoose.Schema({
    // restaurantName:String,
    // numberOfPlaces:Number,
    // image:String,
    // places:{
    //     type:Object,

    // }    

    name: {
        type: String,
        required:true.valueOf,
    },

    email:{
        type: String,
        required:true,
    },

    address: {
        type: String,
        required:true.valueOf,
    },

    Restraunt_Image: {
        type: String
    },

    city: {
        type: String,
        required:true,
        index: true
    },

    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number],
    },

    phoneNumber: {
        type: number,
        required: true,
    },

    food: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
        require: true
    }],

    speciality:{
        type:String,
    }, 

    menue:[{
        type:String,
    }],

}, {
    timeseries: true,
    autoIndex: false // By default, Mongoose automatically calls createIndex for every index defined in your schema when the application starts up. While convenient for development, you should disable this behavior in production because building indexes on a large database can cause significant performance degradation
})

/**
 * // Disabling at the schema level
const vehicleSchema = new mongoose.Schema({
  vin: { type: String, index: true }
}, { autoIndex: false }); // <-- Turn off auto-indexing

// Alternatively, disabling globally at connection time
mongoose.connect('mongodb://localhost:27017/mydb', { autoIndex: false });

 */