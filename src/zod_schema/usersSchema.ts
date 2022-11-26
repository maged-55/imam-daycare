import {z, TypeOf} from 'zod';



export const usersSchema = z.object({
    body: z.object({
    
      username: z
        .string({ required_error: 'name is required !' }),
        password: z
        .number({ required_error: 'password is required !' }),
        email: z
        .string({ required_error: 'email is required !' }),
        role: z
        .enum(['admin', 'user'], { required_error: 'role is required !' }),
        joiningYear: z
        .string({ required_error: 'joiningYear is required !' }),
        age: z
        .number({ required_error: 'Duration is required !' })
    }),
  });
  export type usersSchemaType = TypeOf<typeof usersSchema>['body'];

  