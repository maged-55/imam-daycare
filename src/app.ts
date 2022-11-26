import express from 'express';
import   { NextFunction, Request, Response }  from "express";
import { z } from 'zod';
import parkRouter from './routes/park.route';
import movieRouter from './routes/movie.route';
import studentRouter from './routes/student.route';
import customerRouter from './routes/bank.route';
import usersRouter from './routes/users.route';

import 'dotenv/config';
import {connectDB} from '../config/db'

const app = express();


//config 
connectDB();

app.use(express.json())
const api_key=process.env.API_KEY;
console.log(api_key);
//midle wera
app.use('/api/v1/park', parkRouter);
app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/customer', customerRouter);
app.use('/api/v1/users', usersRouter);





const port = 3000



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
