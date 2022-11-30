import {z, TypeOf} from 'zod';



export const logInSchema = z.object({
    body: z.object({
    

        username: z
        .string({ required_error: 'username is required !' }),
        password: z
        .string({ required_error: 'Password is required !' }),
    }),
  });
  export type logInSchemaType = TypeOf<typeof logInSchema>['body'];

  export const regSchema = z.object({
    body: z.object({
    
   
        username: z
        .string({ required_error: 'username is required !' }),
        password:z
        .string({required_error: 'Password is required !'}),
        email: z
        .string({required_error: 'Email is required !'}),
       
     
  
    }),
  });
  export type regSchemaType = TypeOf<typeof regSchema>['body'];


 