import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';


import {
    customerSchema,
    customerSchemaType,
} from '../zod_schema/bankSchema';

const router = express.Router();

let customer: customerSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(customer);
});

router.post('/', validate(customerSchema), (req, res, next) => {
  const newCustomer = req.body as customerSchemaType;

  customer.push(newCustomer);
  return res.status(201).json({ message: 'customer Added !' });
});



router.put('/put/:id', (req,res) => {
  let updatedCustomer= req.body as customerSchemaType ;
  const { id } = req.params;

  let updatedCustomerList:customerSchemaType[]= customer.filter((Aid) => {
    return Aid.id !== id;
  });

  updatedCustomerList.push(updatedCustomer);

  customer = updatedCustomerList;

  return res.json({
    message: 'customer updated !',
  });
});


router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const newCustomerList = customer.filter((rr) => {
    return rr.id !== id;
  });

  customer = newCustomerList;

  return res.json({
    message: 'customer deleted !',
  });
});

router.put('/put/:id', (req,res) => {
    let updatedCustomer= req.body as customerSchemaType ;
    const { id } = req.params;
  
    let updatedCustomerList:customerSchemaType[]= customer.filter((Aid) => {
      return Aid.id !== id;
    });
    updatedCustomerList.push(updatedCustomer);
    customer = updatedCustomerList;
  
    return res.json({
      message: 'customer updated !',
    });
  });


  router.put('/withdraws/:id', (req,res) => {
    let draws= req.body ;
    const { id } = req.params;
    // const {draws } = req.body;

    let updatedCustomerList:customerSchemaType[]= customer.filter((Aid) => {
      return Aid.id === id;
    });
    updatedCustomerList;

    let updatedCustomerList1= updatedCustomerList.map((Aid) => {
        if( Aid.balance <= draws.b){
          return res.status(400).json({
            message: 'balnce not enough !',
          });


        }
        else {
            Aid.balance -= draws.b;
            return res.json({
                message: 'whithdraws Done and balnce updated!',
              });
            
        }
      });

    return updatedCustomerList1;
  });




  router.put('/deposits/:id', (req,res) => {
    let draws= req.body ;
    const { id } = req.params;
    // const {draws } = req.body;

    let updatedCustomerList00:customerSchemaType[]= customer.filter((Aid) => {
      return Aid.id === id;

    });

    
    let updatedCustomerList100= updatedCustomerList00.map((Aid) => {
        Aid.balance += draws.b
        return res.json({
            message: 'Deposits Done and balnce updated!',
          });
      });
     return updatedCustomerList100;

      
  });



export default router;