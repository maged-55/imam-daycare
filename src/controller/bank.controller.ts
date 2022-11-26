import { NextFunction, Request, Response } from 'express';
import {
    customerSchemaType,
    
  } from '../zod_schema/bankSchema';


  let customer: customerSchemaType[] = [];


export const getCustomerHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json(customer);
};

export const addCustomerHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const newCustomer = req.body as customerSchemaType;
    customer.push(newCustomer);
    return res.status(201).json({ message: 'New Customer added !' });
  };



  export const updateCustomerHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
};


export const deleteCustomerHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;

    const newCustomerList = customer.filter((rr) => {
      return rr.id !== id;
    });
  
    customer = newCustomerList;
  
    return res.json({
      message: 'customer deleted !',
    });
  }

  export const withdrawsCustomerHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
}



export const depositsCustomerHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

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
  }



 