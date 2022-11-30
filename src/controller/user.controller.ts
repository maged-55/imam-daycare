import { User1 } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma ,} from '../../config/db';
import argon2 from 'argon2';
import { isValid } from 'zod';
import {logInSchema,logInSchemaType} from '../zod_schema/user.Schema'


export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user1.findMany();
  res.status(200).json(users);
};

export const loginhand = async (req: Request, res: Response, next:NextFunction)  => {
  const {username,password} = req.body as User1;
try {
    const user = await prisma.user1.findUnique({
        where:{username}
      });
      if(!user){
        return res.status(401).json({
            message: 'Wrong username or password',
          }); }
    
          const vaildPassword = await argon2.verify(user.password, password)
    
          if(!vaildPassword){
            return res.status(401).json({
                message: 'Wrong username or password',
              }); }
      
      return res.status(200).json({
        message: 'Welcome back !',
      });
    
} catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    if (prismaError.code == 'P2002') {
      return res.status(400).json({
        message: 'username or email have been used before',
      });
    }else{
    return res.status(500).json({
      message: 'Server Error !',
    });}
    
}

};

export const register = async (req: Request, res: Response) => {
  const {username,password,email} = req.body as User1;
  const hash  = await argon2.hash(password);
try {

    await prisma.user1.create({
   
        data: {
            username,
            password:hash,
            email
                
          },
    
  });
  res.status(201).json({
    message: 'New user created !',
  });
    
} catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    if (prismaError.code == 'P2002') {
      return res.status(400).json({
        message: 'username or email have been used before',
      });
    }else{
    return res.status(500).json({
      message: 'Server Error !',
    });}
}

    
};

