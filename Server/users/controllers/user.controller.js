const users = require('../model/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Genrate jswt token ----> store in localhost
//Gerrate refresh token ----> store in cookies
//Store user in ---->DB

//Signup route
async function registerUser(req, res) {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !email || !password) {
        return res.status(400).json({
            message: "Please enter all the fields",
        });
    }


    try {
        //Create user in DB
        const checkUser = await users.findOne({ email });
        if (checkUser) {
            return res.status(409).json({
                message: "User already exist",
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new users({
            fullName: {
                firstName,
                lastName
            },
            email,
            password: hashPassword
        });
        await user.save();

        const accesToken = jwt.sign({ _id: user._id }, process.env.secret_key, { expiresIn: '15min' });
        const refreshToken = jwt.sign({ _id: user._id }, process.env.secret_key, { expiresIn: '2days' });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });
        res.status(201).json({
            message: "User crested",
            accesToken: accesToken,
        });
    } catch (error) {

        console.error('Error registering user:', error);
    }
};

//Their is someting wrong in this route we should be creting a refresh token
async function makeRefreshToken(req, res) {
    try {
        const token = req.cookies.refreshToken;
        const check = jwt.verify(token, process.env.secret_key);
        if (!check) {
            console.log('Token is not verifyed')
            res.status(401).json({
                message: 'Invalid token',
                givenToken: token,
            });
        };

        const decode = jwt.decode(token);
        const user = await users.findOne({ _id: decode._id });
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
        }
        console.log(user.email);
        const accesToken = jwt.sign({ _id: check._id }, process.env.secret_key, { expiresIn: '15min' });

        res.status(201).json({
            message: "Acces Token generated",
            accesToken: accesToken,
        });
    } catch (error) {
        console.error('Error generating access token:', error);
    }
};

//Login route
async function loginUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter all the fields",
        });
    }

    try {
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }

        const accesToken = jwt.sign({ _id: user._id }, process.env.secret_key, { expiresIn: '15min' });
        const refreshToken = jwt.sign({ _id: user._id }, process.env.secret_key, { expiresIn: '2days' });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });

        res.status(301).json({
            message: "Login successful",
            accesToken: accesToken,
        });
    } catch (error) {
        console.error('Error logging in user:', error);
    }
}

//logout route
async function logoutUser(req, res) {
    try {
        //Their is no need of user validation in frontend user will be in protected route
        // const token = req.cookie.refreshToken;
        // const decode = jwt.decode(token, process.env.secret_key);
        // const user = users.findOne(decode._id);
        // if (!user){
        //     return res.json({
        //         message: "Not a valid user To logout";
        //     });
        // };

        res.clearCookie('refreshToken');
        res.status(200).json({
            message: "Logout successful",
        });
    } catch (err) {
        console.error("The logout error :-" + err);
    }
}

async function getUserProfile(req, res) {
    try {
        
        const token = req.cookies.refreshToken;

        if (!token) {
            return res.status(401).json({
                message: "No token found"
            });
        }
        const decode =  jwt.verify(token, process.env.secret_key);
        const user = await users.findOne({_id:decode._id}).select("-password -__v");
        if (!user) {
            return res.json({
                message: "User not found",
            });
        };

        res.json({
            user:user,
        })
    } catch (err) {

        console.error('The profile err :-' + err);
    }
}

module.exports = {
    registerUser,
    loginUser,
    makeRefreshToken,
    logoutUser,
    getUserProfile,
};