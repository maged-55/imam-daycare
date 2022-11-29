// // import { prisma } from '../../config/db';
// import {prisma} from '../../config/db'
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
// import { customer } from '@prisma/client';
// import { Rule } from '@prisma/client';



// import { NextFunction, Request, Response } from 'express';
// import {
//     movieSchemaType,
//     movieSchema,
//     rateMovieSchemaType,
    
//   } from '../zod_schema/movieSchema';





//   let movie: movieSchemaType[] = [];
  


// export const getMovieHandler = async(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//     try {
//         const movies = await prisma.customer.findMany()
//         return res.status(200).json(movies);
        
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({message: "Server Error" });
//     }
// };

// export const postMovieHandler = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     try {
//         const newMovie = req.body as customer;
//         await prisma.customer.create({
//             data: newMovie,
//         });
       
//         return res.status(201).json({ message: 'Movie Added !' });

//     } catch (error) {

//         const prismaError = error as PrismaClientKnownRequestError;
//         if (prismaError.code == 'P2002') {
//           return res.status(400).json({
//             message: 'Your name  have been used before',
//           });
//         }else{
//         return res.status(500).json({
//           message: 'Server Error !',
//         });}
//     }}
     
// export const updateMovieHandler = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
// try {

//     let updatedMovie= req.body as customer; ;
//     const { id } = req.params;

//      await prisma.customer.update({
//         where: {id} ,
//         data: updatedMovie,
//      })
//     return res.json({
//       message: 'Movie updated !',
//     });
// } catch (error) {
//     const prismaError = error as PrismaClientKnownRequestError;
//     if (prismaError.code == 'P2002') {
//         return res.status(400).json({
//           message: 'Your name  have been used before',
//         });
//       }
//       return res.status(500).json({
//         message: 'Server Error !',
//       });

 
// }}


// export const deleteMovieHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     try {
//     const { id } = req.params;

// await prisma.customer.delete ({
//     where:{id},
// });
//     return res.json({
//         message: 'Movie deleted !',
//       });
        
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Server Error !',
//           }); 
//     }
//   }


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

// //         const rating = req.params as unknown as rateMovieSchemaType;
// //   const movieByRate = await prisma.customer.findMany({
// //     where: {rating}
//     // where: {
//     //     rating: {in : ratingg },  
//     //   },
    
//     //as unknown as rateMovieSchemaType
// //   });
// //   console.log(rating);
 

//   return res.json({
//     //   movieByRate
//   });
// } catch (error) {
//     // console.log(error);
    
//     return res.status(500).json({
//         message: 'Server Error !' });      
// }
 
//   }