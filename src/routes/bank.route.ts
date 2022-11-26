import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';

import {
  
  getCustomerHandler,
  addCustomerHandler,
  updateCustomerHandler,
  deleteCustomerHandler,
  withdrawsCustomerHandler,
  depositsCustomerHandler,
  
} from '../controller/bank.controller';

import {
    customerSchema,
    customerSchemaType,
} from '../zod_schema/bankSchema';

const router = express.Router();

router.get('/', getCustomerHandler);
router.post('/',validate(customerSchema), addCustomerHandler);
router.put('/:id',validate(customerSchema), updateCustomerHandler)
router.delete('/:id',validate(customerSchema) ,deleteCustomerHandler)
router.put('/withdraws/:id',withdrawsCustomerHandler)
router.put('/deposits/:id',depositsCustomerHandler)
  
      
 
export default router;