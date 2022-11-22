import {z, TypeOf} from 'zod';


export const studentSchema = z.object({
    body: z.object({
      id: z
      .string({ required_error: 'ID is required !' })
      // .null({required_error:'must be not null'})
      .min(4, 'id must be greater than 3'),
      name: z
        .string({ required_error: 'name is required !' })
        // .null({required_error:'must be not null'})
        .min(4, 'You name must be more than 3 char'),
        
        major: z
        .enum(['cs', 'it','swe','is'], { required_error: 'major is required !' }),
    
        level: z
        .number({ required_error: 'level is required !' })
        .min(0, 'level must be enter from 1 to 8')
        .max(8, 'level must be enter from 1 to 8'),

        gpa: z
        .number({ required_error: 'GPA is required !' })
        .min(0, 'GPA must be enter from 0 to 5')
        .max(5, 'GPA must be enter from 0 to 5'),



       
      
    }),
  });
  
  export type studentSchemaType = TypeOf<typeof studentSchema>['body'];





