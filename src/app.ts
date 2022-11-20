import express from 'express';
import {Ipeople} from "./types/people";
import   { NextFunction, Request, Response }  from "express";


const app = express();

const people:Ipeople[] =[
  
]


const port = 3000;

// app.use((req, res, next) => {
//     console.log("ip is :" + req.ip);
//     console.log("header is" + req.headers);
// });
// app.get('/people ', (req, res) => {
//     return res.json(people);
// });

app.use(express.json())

people.push({
    id:"1",
    name:"majed",
    grade:"A+"
});

    app.get('/people',(req:Request,res:Response)=>{
    console.log(req.body)
      return  res.send(people);
     })

     app.post("/people",(req:Request,res:Response)=>{
        const people1=req.body as Ipeople;
        people.push(people1)
        res.json({
            message:"Done"
        })
    })


    app.put("/people/:id",(req,res)=>{
        const people2 = req.body as Ipeople;
        const { id } = req.params;
       const peopleList = people.filter((people)=>{
        return people.id !== id ;
       })

       peopleList.push(people2)
       people = peopleList;
       return res.json({
        message:"Done updating"
       })
    })

    app.delete('/people/:id',(req,res)=>{
        const { id } = req.params;
       const peopleList = people1.filter((pp)=>{
        return pp.id !== id ;
       });
       people = peopleList;
       return res.json({
        message:"people Deleted"
       })
    })






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
