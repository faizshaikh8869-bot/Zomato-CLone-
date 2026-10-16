import 'dotenv/config';
import app from './app.js';
import mongoose from 'mongoose';
import {MONGODB_URI, PORT} from './config/configs.js'

async function StartServer(){
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('DB Connected Succesfuly');

        app.listen(PORT,()=>{
            console.log(`Servre Started On port:- http://localhost:${PORT}`);
        })
    }catch(Err){
        console.log('Faliour in Server Setup:- ', Err);
        process.exitCode(1);  
    }
}

StartServer();
