import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import corsOptions from './config/corsOptions.js';
import connectDB  from './config/connectDB.js';
import Auth from './Routes/Auth.js';
import Hotels from './Routes/Hotels.js'
import Rooms from './Routes/Rooms.js'
import Users from './Routes/Users.js'
const app = express();
connectDB();
app.use(cors(corsOptions))
const PORT = 5000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/auth',Auth);
app.use('/users',Users);
app.use('/hotels',Hotels);
app.use('/rooms',Rooms);
app.use(cookieParser)

mongoose.connection.once('open',()=>{
    console.log('db connected');
    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
    })
})
