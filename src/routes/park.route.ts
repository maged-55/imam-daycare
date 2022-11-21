import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';


import {
  parkSchema,
  parkSchemaType,
} from '../zod_schema/parkSchema';

const router = express.Router();

let ride: parkSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(ride);
});

router.post('/', validate(parkSchema), (req, res, next) => {
  const newRide = req.body as parkSchemaType;

  ride.push(newRide);
  return res.status(201).json({ message: 'Rided Added !' });
});


// router.put('/', validate(parkSchema), (req, res, next) => {
//   let updated = req.body as parkSchemaType;
//   let rID = req.params.id;
//   for (let i=0; i<ride.length; i++){
//     if(ride[i].id == rID){
//       ride[i]=updated
//     }
//   }
//   return res.json({
//     message: 'Ride Ticket Updated!',
//   });
// });


router.put('/put/:id', (req:Request,res:Response) => {
  let updatedRide= req.body as parkSchemaType ;
  const { id } = req.params;

  let updatedRideList:parkSchemaType[]= ride.filter((Aid) => {
    return Aid.id !== id;
  });

  updatedRideList.push(updatedRide);


  

  ride = updatedRideList;

  return res.json({
    message: 'ride updated !',
  });
});


router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const newRideList = ride.filter((rr) => {
    return rr.id !== id;
  });

  ride = newRideList;

  return res.json({
    message: 'Ride deleted !',
  });
});





export default router;