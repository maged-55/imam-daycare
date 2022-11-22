import {z, TypeOf} from 'zod';


export const movieSchema = z.object({
    body: z.object({
      id: z
      .string({ required_error: 'ID is required !' })
      .min(4, 'id must be greater than 3'),
      name: z
        .string({ required_error: 'name is required !' })
        // .null({required_error:'must be not null'})
        .min(4, 'You name must be more than 3 char'),
        
        genre: z
        .enum(['drama', 'action','comedy'], { required_error: 'genre is required !' }),
        rating: z
        .number({ required_error: 'Duration is required !' })
        .min(1, 'You name must be enter between 1 and 5')
        .max(5, 'You name must be enter between 1 and 5'),

        duration: z
        .number({ required_error: 'Duration is required !' })
        .min(61, 'You duration must be more than 60 minute'),

    }),
  });
  
  export type movieSchemaType = TypeOf<typeof movieSchema>['body'];





