import { Request as request } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import argon2 from 'argon2';
import { isValid } from 'zod';
import { Iuser } from '../middleware/auth';
import {addRequestSchemaType} from '../zod_schema/blog.Schema'

// import {logInSchema,logInSchemaType} from '../zod_schema/user.Schema'
var jwt = require('jsonwebtoken');


export const getAllRequestHandler = async (req: Request, res: Response) => {
    try {
        
const user = res.locals.user as Iuser;;

  const blogs = await prisma.request.findMany({
    where:{user_id:user.id}
});
  res.status(200).json(blogs);

} catch (error) {
    console.log(error);     
}
};
export const addRequestHandler = async (req: Request, res: Response) => {
    try {
    const user = res.locals.user;
    const {fname,lname,dateOfBirth,image} = req.body as addRequestSchemaType
      const reqests = await prisma.request.create({
        data:{
            fname,
            lname,
            dateOfBirth,
            image,
            user_id:user.id
        }
    });
      res.status(200).json({
        message:"Request Added successfully"
      });

    } catch (error) {
        console.log(error);
        res.end();
        
    }
    };


    // export const deleteBlogHandler = async (req: Request, res: Response) => {
    //   // const user = res.locals.user as IUser;
    //   // const { blogid } = req.params as deleteTodoSchemaType;
    //   const user = res.locals.user ;
    //   const  blogid  = req.params.id ;
    //   const deleteCount = await prisma.blog.deleteMany({
    //     where: {
    //       id: blogid,
    //       userid: user.id,
    //     },
    //   });
    
    //   if (deleteCount.count == 0) {
    //     return res.status(400).json({
    //       message: 'Invalid blog id',
    //     });
    //   }
    
    //   return res.status(200).json({
    //     message: 'blog deleted !',
    //   });
    // };

