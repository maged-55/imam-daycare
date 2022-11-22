import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';


import {
  movieSchema,
  movieSchemaType,
} from '../zod_schema/movieSchema';

const router = express.Router();

let movie: movieSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(movie);
});

router.post('/', validate(movieSchema), (req, res, next) => {
  const newMovie = req.body as movieSchemaType;

  movie.push(newMovie);
  return res.status(201).json({ message: 'Movie Added !' });
});



router.put('/put/:id', (req:Request,res:Response) => {
  let updatedMovie= req.body as movieSchemaType ;
  const { id } = req.params;

  let updatedMovieList:movieSchemaType[]= movie.filter((Aid) => {
    return Aid.id !== id;
  });

  updatedMovieList.push(updatedMovie);


  

  movie = updatedMovieList;

  return res.json({
    message: 'Movie updated !',
  });
});


router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const newMovieList = movie.filter((rr) => {
    return rr.id !== id;
  });

  movie = newMovieList;

  return res.json({
    message: 'Movie deleted !',
  });
});

router.get('/search/:genre', (req:Request,res:Response) => {
    let updatedMovie= req.body as movieSchemaType ;
    const { genre } = req.params;

    let updatedMovieList:movieSchemaType[]= movie.filter((Aid) => {
        return Aid.genre === genre;
      });
    return res.json({
        updatedMovieList
    });
 
  
    return updatedMovieList
        
  })




  router.get('/search1/:name', (req,res) => {
    const name  = req.params.name;

    const newMovieList1 = movie.filter((rr) => {
        return rr.name === name;
      });
  
    

    return res.json(
        newMovieList1
         
        
    );
  });






export default router;