import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import argon2 from 'argon2';
import { isValid } from 'zod';
import {logInSchema,logInSchemaType} from '../zod_schema/user.Schema'
let jwt = require('jsonwebtoken');


// here we got all users with id ,username and password hash

// export const getAllUsersWithPasswordHash = async (req: Request, res: Response) => {
//   const users = await prisma.user.findMany(
//     {select:{
//         id:true,
//         username:true,
//         password:true,
//         // email:true,
//         // blog:true
        
//   }}
//   );
//   res.status(200).json(users);
// };

export const loginhand = async (req: Request, res: Response, next:NextFunction)  => {
  const {username,password} = req.body as User;
try {
    const user = await prisma.user.findUnique({
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

              const token = jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET as string,
                {expiresIn:'1d'}
              );
      return res.status(200).json({
        message: 'Welcome back !',
        token
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
  const {firstName,lastName,username,password,email} = req.body as User;
  const hash  = await argon2.hash(password);
try {

    await prisma.user.create({
   
        data: {
          firstName,
            lastName,
            username,
            password:hash,
            email,
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
      message: "server error 1111" ,
    });}
}
};

