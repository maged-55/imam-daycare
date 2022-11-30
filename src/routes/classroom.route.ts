import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
 
    getClassroomHandler,
    getClassRoomByIdHandler,
    addClassRoomHandler
    
  
} from '../controller/classroom.controller';

import {
    classroomSchema,
    
} from '../zod_schema/school.Schema';

const router = express.Router();


router.post('/',validate(classroomSchema), addClassRoomHandler);
router.get('/', getClassroomHandler);
router.get('/:classroomid', getClassRoomByIdHandler);

export default router;