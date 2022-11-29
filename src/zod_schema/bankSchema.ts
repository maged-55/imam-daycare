import {z, TypeOf} from 'zod';


export const customerSchema = z.object({
    body: z.object({
     
      id: z
      .string({ required_error: 'ID is required !' })
      .min(5, 'id must be greater than 4'),
      username: z
        .string({ required_error: 'name is required !' })
        // .null({required_error:'must be not null'})
        .min(7, 'Your username must be more than 6 char'),

        password: z
        .string()
        .min(1)
        .regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),'Minimum eight you must be contains At least 1 upper case, lower case, numeric, and special character'),
       
        balance: z
        .number().positive('must be positive number'),

    }),
  });
  
  export type customerSchemaType = TypeOf<typeof customerSchema>['body'];




