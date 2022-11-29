import {z, TypeOf} from 'zod';



export const userSchema = z.object({
    body: z.object({
    

        username: z
        .string({ required_error: 'username is required !' }),
        password: z
        .string({ required_error: 'Password is required !' }),
     
  
    }),
  });
  export type userSchemaType = TypeOf<typeof userSchema>['body'];

  export const bookSchema = z.object({
    body: z.object({
    
      id: z
        .string({ required_error: 'Id is required !' }),
        name: z
        .string({ required_error: 'name is required !' }),
        genre: z
        .string({ required_error: 'genre is required !' }),
     
  
    }),
  });
  export type bookSchemaType = TypeOf<typeof bookSchema>['body'];


  export const loanSchema = z.object({
    body: z.object({
    
      id: z
        .string({ required_error: 'name is required !' }),
        userId: z
        .string({ required_error: 'userId is required !' }),
        bookID: z
        .string({ required_error: 'bookID is required !' }),
     
  
    }),
  });
  export type loanSchemaType = TypeOf<typeof loanSchema>['body'];
