
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { userInfo } from 'os';

export interface Iuser{
    id:string,
    role:string,

}

const protect = (req: Request, res: Response, next: NextFunction) => {

    try {
        const header=req.headers.authorization;
        if(!header){
            res.status(400).json({
                message:"you are jjj not allowed to access this page"
             });
        }
        const token = header?.split(' ')[1] as string;
        const user = jwt.verify(token,process.env.JWT_SECRET as string ) as Iuser;
        console.log(user);

        res.locals.user = user;

    
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"you are not allowed to access this page"
         } )
        
        

    }

}

const authorize = (role :string)=>(req: Request, res: Response, next: NextFunction) =>{
   const user =res.locals.user as Iuser;
    if(user.role!==role){
        return res.status(403).json({
            message:"you are not allowed to enterrr"
        });

    };
next();
}

export {protect,authorize};