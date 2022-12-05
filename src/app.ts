import express from 'express';
import   { NextFunction, Request, Response }  from "express";
import { z } from 'zod';
import userRouter from './routes/user.route';
import blogRouter from './routes/blog.route';




import 'dotenv/config';
import {connectDB} from './config/db'

const app = express();

connectDB();

app.use(express.json())
const api_key=process.env.API_KEY;
console.log(api_key);

app.use('/api/v1/user', userRouter);
app.use('/api/v1/blog', blogRouter);






const port = 5001



app.listen(port, () => {
    console.log(`Example app listening on port`+ port);
});
