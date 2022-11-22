import express ,{Request,Response}from 'express';
import validate from '../middleware/validate';


import {
  studentSchema,
  studentSchemaType,
} from '../zod_schema/studentSchema';

const router = express.Router();

let student: studentSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(student);
});

router.post('/', validate(studentSchema), (req, res, next) => {
  const newStudent = req.body as studentSchemaType;

  student.push(newStudent);
  return res.status(201).json({ message: 'Student Added !' });
});



router.put('/put/:id', (req:Request,res:Response) => {
  let updatedStudent= req.body as studentSchemaType ;
  const { id } = req.params;

  let updatedStudentList:studentSchemaType[]= student.filter((Aid) => {
    return Aid.id !== id;
  });

  updatedStudentList.push(updatedStudent);


  

  student = updatedStudentList;

  return res.json({
    message: 'Student updated !',
  });
});


router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const newStudentList = student.filter((rr) => {
    return rr.id !== id;
  });

  student = newStudentList;

  return res.json({
    message: 'Student deleted !',
  });
});


router.get('/search/:major', (req:Request,res:Response) => {
    let updatedStudent= req.body as studentSchemaType ;
    const { major } = req.params;
  
      let updatedStudentList:studentSchemaType[]= student.filter((Aid) => {
        return Aid.major === major;
      });
    return res.json({
        updatedStudentList
    });
  });


  router.put('/level/:name', (req:Request,res:Response) => {
   
    const { name } = req.params;
  

    let updatedStudentList:studentSchemaType[]= student.filter((Aid) => {
        return Aid.name === name;
      });

      let updatedCustomerList100= updatedStudentList.map((Aid) => {
        Aid.level += 1
        return res.json({
            message: 'Level updated!',
          });
      });
     return updatedCustomerList100;
  });



export default router;