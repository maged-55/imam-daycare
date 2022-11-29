// import express ,{Request,Response}from 'express';
// import validate from '../middleware/validate';

// import {
  
//   getMovieHandler,
//   postMovieHandler,
//   updateMovieHandler,
//   deleteMovieHandler,
//   searchByGenreMovieHandler,
//   searchByNameMovieHandler,
//   searchByRateMovieHandler,

  
// } from '../controller/movie.controller';

// import {
//   movieSchema,
//   movieSchemaType,
// } from '../zod_schema/movieSchema';

// const router = express.Router();


// router.get('/', getMovieHandler);
// router.post('/',validate(movieSchema), postMovieHandler);
// router.put('/:id',validate(movieSchema), updateMovieHandler);
// router.delete('/:id',deleteMovieHandler);
// router.get('/searchByGenre/:genre',searchByGenreMovieHandler);
// router.get('/searchByName/:name',searchByNameMovieHandler);
// router.get('/searchByRate/:ratingg',searchByRateMovieHandler);


// export default router;