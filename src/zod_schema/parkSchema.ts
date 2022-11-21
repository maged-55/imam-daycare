import {z, TypeOf} from 'zod';


export const parkSchema = z.object({
    body: z.object({
      id: z
      .string({ required_error: 'ID is required !' })
      // .null({required_error:'must be not null'})
      .min(2, 'id must be greater than 2'),
      name: z
        .string({ required_error: 'name is required !' })
        // .null({required_error:'must be not null'})
        .min(5, 'You name must be more than 4 char'),
        
        type: z
        .enum(['rollercoaster', 'thriller','water'], { required_error: 'type is required !' }),
    
        tickets: z
        .number({ required_error: 'Tickets is required !' }),

        price: z.number({ required_error: 'Price is required !' }),
      
    }),
  });
  
  export type parkSchemaType = TypeOf<typeof parkSchema>['body'];





