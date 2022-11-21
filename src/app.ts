import express from 'express';
import {Ipeople,Itask,Igrade} from "./types/people";
import   { NextFunction, Request, Response }  from "express";
import { z } from 'zod';
import parkRouter from './routes/park.route';

const app = express();
app.use(express.json())

app.use('/api/v1/park', parkRouter);
const port = 3000



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
