import { prisma } from '../../config/db';
import {User,Books,Loan  } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';



import { NextFunction, Request, Response } from 'express';
import {
    bookSchemaType,
    bookSchema,
    loanSchemaType,
    loanSchema,
    userSchemaType,
    userSchema
  } from '../zod_schema/bookSchema';

  
export const getUserHandler = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const user = await prisma.user.findMany()
        return res.status(200).json(user);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error" });
    }
};
export const getBookHandler = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const book = await prisma.books.findMany()
        return res.status(200).json(book);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error" });
    }
};
export const getLoanHandler = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const loan = await prisma.loan.findMany()
        return res.status(200).json(loan);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error" });
    }
};

export const addUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const addUser = req.body ;
        await prisma.user.create({
            data: addUser,
        });
       
        return res.status(201).json({ message: 'User Added !' });

    } catch (error) {

        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Your User have been used before',
          });
        }else{
        return res.status(500).json({
          message: 'Server Error !',
        });}
    }}

    export const addBookHandler = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      try {
          const addBook = req.body ;
          await prisma.books.create({
              data: addBook,
          });
         
          return res.status(201).json({ message: 'Book Added !' });
  
      } catch (error) {
  
          const prismaError = error as PrismaClientKnownRequestError;
          if (prismaError.code == 'P2002') {
            return res.status(400).json({
              message: 'Your Book have been used before',
            });
          }else{
          return res.status(500).json({
            message: 'Server Error !',
          });}
      }}

      export const addLoanHandler = async (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        try {
            const addLoan = req.body ;
            await prisma.loan.create({
                data: addLoan,
            });
           
            return res.status(201).json({ message: 'Loan Added !' });
    
        } catch (error) {
    
            const prismaError = error as PrismaClientKnownRequestError;
            if (prismaError.code == 'P2002') {
              return res.status(400).json({
                message: 'Your Loan have been used before',
              });
            }else{
            return res.status(500).json({
              message: 'Server Error !',
            });}
        }}

        export const getLendedBooks = async (req: Request, res: Response) => {
          //:TODO Complete this endpoint
          const { bookid } = req.params ;
          const LendedBooks = await prisma.loan.findMany({
            where: {
              bookID: bookid,
            },
          });
        
          if (LendedBooks.length == 0) {
            return res.status(400).json({
              message: "bookID is invalid",
            });
          }
        
          return res.status(200).json(LendedBooks);
        };

        export const lendBooks = async (req: Request, res: Response) => {
          try {
            const {userid} = req.params ;
        
            const getLoan = await prisma.user.findUnique({
           
              where: {id:userid},
              select: {
                username: true,
                loan: true,
              },
            });
        
            return res.status(200).json(getLoan);
          } catch (err) {
            console.log(err);
            return res.status(500).json({
              message: "server error !",
            });
          }
        };



     
