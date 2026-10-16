import mongoose from "mongoose";
import { FoodCategoiies } from "../utils/constants";

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    Image:[{
        type: String,
    }],

    categories:{
        type:String,
        enum: FoodCategoiies,
    },

    price:{
        type:Number,
        require:true,
    },

    speciality:{
        type:String,
    },
},{
    timeseries:true,
});


export const Food = mongoose.model('food', foodSchema);
