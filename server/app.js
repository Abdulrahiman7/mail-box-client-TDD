import dotenv from "dotenv";


import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import UserRoutes from "./Routes/User.js";
import http from 'http';
import mongoose from "mongoose";

const app=express();
app.use(cors());
const server=http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(UserRoutes);

dotenv.config();

async function startServer(Port) {
    try{
   
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mail-box-client.mongodb.net/?retryWrites=true&w=majority`);
        server.listen(Port, ()=>{
            console.log('started server on port:', Port);
        })
    }catch(err)
    {
        console.log(err);
    }
}

startServer(5000);