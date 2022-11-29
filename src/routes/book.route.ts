import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
    getUserHandler,
    addUserHandler,
    addBookHandler,
    getBookHandler,
    addLoanHandler,
    getLoanHandler
//   updateCustomerHandler,
//   deleteCustomerHandler,
//   withdrawsCustomerHandler,
//   depositsCustomerHandler,
  
} from '../controller/book.controller';

import {
    bookSchema,
    bookSchemaType,
} from '../zod_schema/bookSchema';

const router = express.Router();

router.post('/loan', addLoanHandler);
router.post('/user', addUserHandler);
router.post('/book', addBookHandler);
router.get('/book', getBookHandler);
router.get('/loan', getLoanHandler);
router.get('/user', getUserHandler);




// router.post('/',validate(customerSchema), addCustomerHandler);
// router.put('/:id',validate(customerSchema), updateCustomerHandler)
// router.delete('/:id',validate(customerSchema) ,deleteCustomerHandler)
// router.put('/withdraws/:id',withdrawsCustomerHandler)
// router.put('/deposits/:id',depositsCustomerHandler)
  
      
 
export default router;