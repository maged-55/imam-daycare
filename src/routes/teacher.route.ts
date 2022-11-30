import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
    getTeacherHandler,
   addteacherHandler,
   getTeacherByIdHandler
    
   

  
} from '../controller/teacher.controller';

import {
    teacherSchema,
   
} from '../zod_schema/school.Schema';

const router = express.Router();


router.post('/',validate(teacherSchema), addteacherHandler);
router.get('/', getTeacherHandler);
router.get('/:teacherid',    getTeacherByIdHandler
);

export default router;