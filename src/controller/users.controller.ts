import { prisma } from '../../config/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { user } from '@prisma/client';





import { NextFunction, Request, Response } from 'express';
import {
    usersSchemaType,
    usersSchema,
    
  } from '../zod_schema/usersSchema';


export const getUsersHandler = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const users = await prisma.user.findMany()
        return res.status(200).json(users);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error" });
    }
};

export const postUsersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const users = req.body as user;
        await prisma.user.create({
            data: users,
        });
       
        return res.status(201).json({ message: 'user Added !' });

    } catch (error) {

        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Your email have been used before',
          });
        }else{
        return res.status(500).json({
          message: 'Server Error !',
        });}
    }}

    export const  getOneUserHandler = async (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        try {
          const { id } = req.params ;
          const oneUser = await prisma.user.findUnique({
            where: { id },
          });
      
          return res.status(200).json(oneUser);
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Server Error !' });
        }
      };

      export const searchByEmailUserHandler = async(
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        try {
      const email  = req.params.email;
      const userByEmail = await prisma.user.findFirst({
        where:{email}
      });
      console.log();
      return res.json({
        userByEmail
      });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error !' });      
    }
     
      }
     

  



//   export const searchByGenreMovieHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {

//   try {
//     // const {genre} = req.params;
//     const { genre } = req.params;

//     const movieByGenre = await prisma.customer.findMany({
// where:{
//        genre: Rule[genre as keyof typeof Rule]
//     }
//         // genre: Rule.action
//     });
//     return res.json({
//         movieByGenre
//     });
//   } catch (error) {
//       return res.status(500).json({ message: 'Server Error !' });      
//   }
// }

//   export const searchByNameMovieHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     try {

//   const name  = req.params.name;
//   const movieByName = await prisma.customer.findFirst({
//     where:{name},
//   });
//   return res.json({
//       movieByName
//   });
// } catch (error) {
//     return res.status(500).json({ message: 'Server Error !' });      
// }
 
//   }

//   export const searchByRateMovieHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
    
//     try {

//         const rating = req.params.rating;
//   const movieByRate = await prisma.customer.findMany({
//     where: {rating} as unknown as rateMovieSchemaType,
//   });
//   return res.json({
//       movieByRate
//   });
// } catch (error) {
//     return res.status(500).json({
//         message: 'Server Error !' });      
// }
 
//   }