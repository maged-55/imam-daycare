import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
    getStudentHandler,
    addStudentHandler,
    getStudentByIdHandler
   
//   updateCustomerHandler,
//   deleteCustomerHandler,
//   withdrawsCustomerHandler,
//   depositsCustomerHandler,
  
} from '../controller/student.controller';

import {
    studentSchema,
    studentSchemaType,
} from '../zod_schema/school.Schema';

const router = express.Router();


router.post('/',validate(studentSchema),addStudentHandler);
router.get('/', getStudentHandler);
router.get('/:studentid', getStudentByIdHandler);

export default router;