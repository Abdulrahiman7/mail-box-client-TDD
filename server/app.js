import dotenv from "dotenv";


import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import UserRoutes from "./Routes/User.js";
import http from 'http';
import mongoose from "mongoose";
import MailRoutes from "./Routes/Mail.js";

const app=express();
app.use(cors());
const server=http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(UserRoutes);
app.use(MailRoutes);

dotenv.config();

async function startServer(Port) {
    try{
        const uri = `mongodb+srv://abdul:Rockrolland@mail-box-client.ywri2.mongodb.net/?retryWrites=true&w=majority&appName=mail-box-client`;
        const x=await mongoose.connect(uri );
        server.listen(Port, ()=>{
            console.log('started server on port:', Port);
        })
    }catch(err)
    {
        console.log(err);
    }
}

startServer(5000);