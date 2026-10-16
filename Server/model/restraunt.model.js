import mongoose, { Mongoose } from "mongoose";
import Food from "./Foods.model";
import user from "./user.model";


const reviewSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId, // for population of name
        ref: 'User',
        required: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    comment: {
        type: String,
        default: ''
    }
});

const menueSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String }
})


const restrauntSchema = new mongoose.Schema({
    Restraunt_Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    name: {
        type: String,
        required: true.valueOf,
    },

    email: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true.valueOf,
    },

    phoneNumber: {
        type: number,
        required: true,
    },

    Restraunt_Image: {
        type: String
    },

    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },

    Speciality: { type: String },

    menue: { menueSchema },
    reviews: [reviewSchema]

}, {
    timeseries: true,
    autoIndex: false
    // By default, Mongoose automatically calls createIndex for every index defined
    //  in your schema when the application starts up. While convenient for development,
    //  you should disable this behavior in production because building indexes on a 
    // large database can cause significant performance degradation
})

const Restraunt = mongoose.model('Restraunt', restrauntSchema);
export default Restraunt;

/**
 * // Disabling at the schema level
const vehicleSchema = new mongoose.Schema({
  vin: { type: String, index: true }
}, { autoIndex: false }); // <-- Turn off auto-indexing

// Alternatively, disabling globally at connection time
mongoose.connect('mongodb://localhost:27017/mydb', { autoIndex: false });

 */