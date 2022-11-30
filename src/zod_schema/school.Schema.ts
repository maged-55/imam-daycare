import {z, TypeOf} from 'zod';



export const studentSchema = z.object({
    body: z.object({
    

        name: z
        .string({ required_error: 'username is required !' }),
        major: z
        .string({ required_error: 'Password is required !' }),
        age : z
        .number({ required_error: 'please enter your age' }),

     
  
    }),
  });
  export type studentSchemaType = TypeOf<typeof studentSchema>['body'];

  export const classroomSchema = z.object({
    body: z.object({
    
   
        name: z
        .string({ required_error: 'ClassName is required !' }),
       
     
  
    }),
  });
  export type classroomSchemaType = TypeOf<typeof classroomSchema>['body'];


  export const teacherSchema = z.object({
    body: z.object({

        name: z
        .string({ required_error: 'TeacherName is required !' }),

  
    }),
  });
  export type teacherSchemaType = TypeOf<typeof teacherSchema>['body'];
