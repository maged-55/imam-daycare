import {z, TypeOf} from 'zod';


export const movieSchema = z.object({
    body: z.object({
      // id: z
      // .string({ required_error: 'ID is required !' })
      // .min(4, 'id must be greater than 3'),
      name: z
        .string({ required_error: 'name is required !' })
        // .null({required_error:'must be not null'})
        .min(4, 'You name must be more than 3 char'),
        
        genre: z
        .enum(['drama', 'action','comedy'], { required_error: 'genre is required !' }),
        rating: z
        .number({ required_error: 'Duration is required !' })
        .min(1, 'You must be enter between 1 and 5')
        .max(5, 'You must be enter between 1 and 5'),

        duration: z
        .number({ required_error: 'Duration is required !' })
        .min(61, 'You duration must be more than 60 minute'),
        // createdat: z
        // .string({ required_error: 'Date is required !' })
        // .regex(new RegExp("^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$"),'Minimum eight you must be contains At least 1 upper case, lower case, numeric, and special character'),
       


    }),
  });
  




  export const rateMovieSchema = z.object({
   
    params: z.object({
      ratingg: z.number({required_error: "you should enter the number"}),
    })
  });
  export type movieSchemaType = TypeOf<typeof movieSchema>['body'];
  export type rateMovieSchemaType = z.infer<typeof rateMovieSchema>['params'];



