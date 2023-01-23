import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
    // getUserHandler,
    register,
    // getAllUsersWithPasswordHash,
    loginhand,
  
} from '../controller/user.controller';
import {
    logInSchema,
    regSchemaType,
    regSchema

} from '../zod_schema/user.Schema';
import {authorize, protect} from '../middleware/auth';



const router = express.Router();

router.post('/register', register);
router.post('/login',validate(logInSchema),loginhand);

// here only admin can access to show the users
// router.get('/',protect,authorize("admin") ,getAllUsersWithPasswordHash);




export default router;