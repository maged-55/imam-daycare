import express from 'express';
import   { NextFunction, Request, Response }  from "express";
import { z } from 'zod';
import parkRouter from './routes/park.route';
import movieRouter from './routes/movie.route';
import studentRouter from './routes/student.route';

import customerRouter from './routes/bank.route';



const app = express();
app.use(express.json())

app.use('/api/v1/park', parkRouter);
app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/customer', customerRouter);



const port = 3000



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
