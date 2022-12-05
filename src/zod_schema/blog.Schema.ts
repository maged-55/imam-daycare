import {z, TypeOf} from 'zod';



export const addBlogSchema = z.object({
    body: z.object({
    

        title: z
        .string({ required_error: 'username is required !' })
        .min(3, 'Title must be greater than 2')
        .max(15, 'Title must be smaller than 15'),
        message: z
        .string({ required_error: 'Message is required !' })
        .min(7, 'Message must be greater than 6')
        .max(155, 'Message must be smaller than 155'),
    }),
  });
  export type addBlogSchemaType = TypeOf<typeof addBlogSchema>['body'];

  export const regSchema = z.object({
    body: z.object({
    
   
        username: z
        .string({ required_error: 'username is required !' })
        .min(3, 'username must be greater than 2')
        .max(15, 'username must be smaller than 15'),

        password:z
        .string({required_error: 'Password is required !'}),
        email: z
        .string().email({ message: "Invalid email address" }),
        
       
    }),
  });
  export type regSchemaType = TypeOf<typeof regSchema>['body'];




   export const deleteSchema = z.object({
    params: z.object({

        id:z
        .string({required_error: 'id is required'}),
    
   
    }),
  });
  export type deleteSchemaType = TypeOf<typeof deleteSchema>['params'];


 