import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
    getUsersHandler,
    postUsersHandler,
    getOneUserHandler,
    searchByEmailUserHandler


  
} from '../controller/users.controller';

import {
    usersSchema,
  usersSchemaType,
} from '../zod_schema/usersSchema';

const router = express.Router();

router.get('/', getUsersHandler);
router.post('/',validate(usersSchema), postUsersHandler);
router.get('/one/:id', getOneUserHandler);
router.get('/searchByEmail/:email', searchByEmailUserHandler);



// router.put('/:id',validate(movieSchema), updateMovieHandler);
// router.delete('/:id',deleteMovieHandler);
// router.get('/searchByGenre/:genre',searchByGenreMovieHandler);
// router.get('/searchByName/:name',searchByNameMovieHandler);
// router.get('/searchByRate/:rating',searchByRateMovieHandler);


export default router;