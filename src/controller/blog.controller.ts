import { Blog } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import argon2 from 'argon2';
import { isValid } from 'zod';
import { Iuser } from '../middleware/auth';
import {addBlogSchemaType} from '../zod_schema/blog.Schema'

// import {logInSchema,logInSchemaType} from '../zod_schema/user.Schema'
var jwt = require('jsonwebtoken');


export const getAllBlogHandler = async (req: Request, res: Response) => {
    try {
        
const user = res.locals.user as Iuser;;

  const blogs = await prisma.blog.findMany({
    where:{userid:user.id}
});
  res.status(200).json(blogs);

} catch (error) {
    console.log(error);     
}
};
export const addBlogHandler = async (req: Request, res: Response) => {
    try {
    const user = res.locals.user;
    const {title,message} = req.body as addBlogSchemaType
      const blogs = await prisma.blog.create({
        data:{
            title,
            message,
            userid:user.id
        }
    });
      res.status(200).json({
        message:"Blog Added successfully"
      });

    } catch (error) {
        console.log(error);
        res.end();
        
    }
    };


    export const deleteBlogHandler = async (req: Request, res: Response) => {
      // const user = res.locals.user as IUser;
      // const { blogid } = req.params as deleteTodoSchemaType;
      const user = res.locals.user ;
      const  blogid  = req.params.id ;
      const deleteCount = await prisma.blog.deleteMany({
        where: {
          id: blogid,
          userid: user.id,
        },
      });
    
      if (deleteCount.count == 0) {
        return res.status(400).json({
          message: 'Invalid blog id',
        });
      }
    
      return res.status(200).json({
        message: 'blog deleted !',
      });
    };

