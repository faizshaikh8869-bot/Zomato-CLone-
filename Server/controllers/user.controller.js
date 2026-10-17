import users from '../model/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/configs.js';

//Genrate jswt token ----> store in localhost
//Gerrate refresh token ----> store in cookies
//Store user in ---->DB

//Signup route
async function registerUser(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
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
            name,
            email,
            password: hashPassword
        });
        await user.save();

        const accessToken = jwt.sign({ _id: user._id, role: user.role }, config.SECRET_KEY, { expiresIn: config.ACCES_TOKEN_EXPIRY || '15min' });
        const refreshToken = jwt.sign({ _id: user._id }, config.SECRET_KEY, { expiresIn: config.REFRESH_TOKEN_EXPIRY });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });
        
        res.status(201).json({
            message: "User created",
            accessToken,
            user: {
                name: user.name,
                email: user.email,
                profilePic: user.profilePic || "",
            },
        });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: "Registration failed" });
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

        const accessToken = jwt.sign({ _id: user._id, role: user.role }, config.SECRET_KEY, { expiresIn: config.ACCES_TOKEN_EXPIRY || '15min' });
        const refreshToken = jwt.sign({ _id: user._id }, config.SECRET_KEY, { expiresIn: config.REFRESH_TOKEN_EXPIRY || '2days' });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });

        res.status(200).json({
            message: "Login successful",
            accessToken,
            user: {
                name: user.name,
                email: user.email,
                profilePic: user.profilePic || "",
            },
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).json({ message: "Login failed" });
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
        
        const user = await users.findById(req.user._id).select("-password -__v");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };

        return res.json({ user });
    } catch (err) {
        console.error('Error fetching user profile:', err);
        return res.status(500).json({ message: "Could not load user profile" });
    }
}

export  {
    registerUser,
    loginUser,
    makeRefreshToken,
    logoutUser,
    getUserProfile,
};