import express from 'express';
import   { NextFunction, Request, Response }  from "express";
import { z } from 'zod';
import userRouter from './routes/user.route';



import 'dotenv/config';
import {connectDB} from '../config/db'

const app = express();

connectDB();

app.use(express.json())
const api_key=process.env.API_KEY;
console.log(api_key);

app.use('/api/v1/user', userRouter);




const port = 3000



app.listen(port, () => {
    console.log(`Example app listening on port`+ port);
});
