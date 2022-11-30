import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
    // getUserHandler,
    register,
    getAllUsers,
    login,
  
} from '../controller/user.controller';
import {
    logInSchema,
    regSchemaType,
    regSchema

} from '../zod_schema/user.Schema';



const router = express.Router();

router.post('/register', register);
router.get('/login', login);
router.get('/', getAllUsers);


export default router;