import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{ 
            type:String ,
            required:true,
            minlength:[3 , 'First name must be at least 3 characters long']
        },
        lastName:{ 
            type:String,
            minlength:[3 , 'last name must be at least 3 characters long']
        },
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
    profilePic:{
        type:String,
        default: 'https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-flat-style-user-profile-icon-on-isolated-background-vector-png-image_49602770.jpg'
    },
});

const user = mongoose.model('user' , userSchema);

module.exports =user;