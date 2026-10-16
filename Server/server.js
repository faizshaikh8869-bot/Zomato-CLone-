import 'dotenv/config';
import app from './app.js';
import mongoose from 'mongoose';
import {config} from './config/configs.js'

async function StartServer(){
    try{
        await mongoose.connect(config.MONGODB_URI);
        console.log('DB Connected Succesfuly');

        app.listen(config.PORT,()=>{
            console.log(`Servre Started On port:- http://localhost:${config.PORT}`);
        })
    }catch(Err){
        console.log('Faliour in Server Setup:- ', Err);
        process.exitCode(1);  
    }
}

StartServer();
