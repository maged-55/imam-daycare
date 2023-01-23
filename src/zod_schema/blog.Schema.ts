import {z, TypeOf} from 'zod';



export const addRequestSchema = z.object({
    body: z.object({
    

      fname: z
      .string({ required_error: 'username is required !' })
      .min(2, 'first name must be greater than 1')
      .max(15, 'First name must be smaller than 15'),

      lname: z
      .string({ required_error: 'username is required !' })
      .min(2, 'first name must be greater than 1')
      .max(15, 'First name must be smaller than 15'),

      dateOfBirth:z
      .string({required_error: 'dateOfBirth is required !'}),
      image: z
      .string({required_error: 'image is required !'}),
    }),
  });
  export type addRequestSchemaType = TypeOf<typeof addRequestSchema>['body'];

  export const regSchema = z.object({
    body: z.object({
    
   
        fname: z
        .string({ required_error: 'username is required !' })
        .min(2, 'first name must be greater than 1')
        .max(15, 'First name must be smaller than 15'),

        lname: z
        .string({ required_error: 'username is required !' })
        .min(2, 'first name must be greater than 1')
        .max(15, 'First name must be smaller than 15'),

        dateOfBirth:z
        .string({required_error: 'dateOfBirth is required !'}),
        image: z
        .string({required_error: 'image is required !'}),

        // .string().email({ message: "Invalid email address" }),
      
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


 