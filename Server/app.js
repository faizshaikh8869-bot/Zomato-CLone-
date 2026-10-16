import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import mongoose from 'mongoose';

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // or 3000 depending on React
    credentials: true
}));

// Basic
app.get('/health', (_req, res)=>{ 
    // Output :- 1:- Disconnected; 2. Connected 3.Connecting 4.Disconnected
    const DBConnection =  mongoose.connection.readyState === 1 ? 'UP': 'DOWN';
    const SystemStatus = DBConnection === 'UP' ? 'UP':'DOWN'; 
    
    if(SystemStatus === 'DOWN'){
        return res.status(503).json({})
    }

    const helthStatusInfo = {
        status: SystemStatus,
        timestamp: new Date.now(),
        services:{
            mongoDB: DBConnection,
        }
    };

    res.status(200).json(helthStatusInfo)
});


app.use('/user', userRouter);



export default app;