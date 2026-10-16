import mongoose from "mongoose";
import { ROLE } from "../utils/constants.js";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:4,
        required:true
    },
    email:{ 
        type:String,
        required:true ,
        unique:true,
        minlength: [ 5, 'Email must be at least 5 characters long' ],
        //For email with letrs and numbers
    },
    password:{
        type:String,
        required:true,
        minlength:[6 , 'Password must be at least 8 characters long']
    },
    // profilePic:{
    //     type:String,
    //     default: 'https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-flat-style-user-profile-icon-on-isolated-background-vector-png-image_49602770.jpg'
    // },
    role:{
        type:String,
        enum:[ROLE],
        default:ROLE.USER
    }
});

const User = mongoose.model('User' , userSchema);

export default user;