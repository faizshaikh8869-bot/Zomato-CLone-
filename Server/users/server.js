const express =require('express');
require('dotenv').config();
const cookiesParser =require('cookie-parser');
const cors =require('cors');

const userRouter =require('./routes/user.routes.js');
const connectDB =require('./config/Connect.js');
require('dotenv').config();

const app =express();

connectDB();

app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // or 3000 depending on React
    credentials: true
}));

app.get('/', (req, res) => {
    res.send("Hello")
});

app.use('/user', userRouter);

app.listen(process.env.port ||4000, ()=>{
    console.log('Server started at '+`${process.env.port ||4000}`);
})