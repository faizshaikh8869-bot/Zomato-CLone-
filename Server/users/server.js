import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import connectDB from './config/Connect.js';

const app =express();

connectDB();

app.use(cookieParser());
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