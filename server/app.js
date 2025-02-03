import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import UserRoutes from "./Routes/User.js";
import http from 'http';

const app=express();
app.use(cors());
const server=http.createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(UserRoutes);


server.listen(5000)

console.log("started server");
