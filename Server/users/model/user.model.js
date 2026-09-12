const mongoose =require('mongoose');

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
        type:String
    },
});

const user = mongoose.model('user' , userSchema);

module.exports =user;