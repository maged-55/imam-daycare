import express from 'express';
import {Ipeople,Itask,Igrade} from "./types/people";
import   { NextFunction, Request, Response }  from "express";


const app = express();

const people:Ipeople[] =[]
let gredeArr: Igrade[] =[]
let taskArr: Itask[] = []


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


    // app.put("/people/:id",(req,res)=>{
    //     const people2 = req.body as Ipeople;
    //     const { id } = req.params;
    //    const peopleList = people.filter((people)=>{
    //     return people.id !== id ;
    //    })

    //    peopleList.push(people2)
    //    people = peopleList;
    //    return res.json({
    //     message:"Done updating"
    //    })
    // })

    // app.delete('/people/:id',(req,res)=>{
    //     const { id } = req.params;
    //    const peopleList = people1.filter((pp)=>{
    //     return pp.id !== id ;
    //    });
    //    people = peopleList;
    //    return res.json({
    //     message:"people Deleted"
    //    })
    // })

    app.get(`/task`, (req, res) => {
        return res.json(taskArr);
      });

      app.post(`/task`, (req, res) => {
        taskArr.push(req.body);
        return res.json({
          message: "task added !",
        });
      });

      app.put(`/task/:id`, (req, res) => {
        const { id } = req.params;
        const updateTask = req.body as Itask;
        taskArr.map((task) => {
          if (task.id === id) {
            task.id = id;
            task.description = updateTask.description;
            task.title = updateTask.title;
            task.status = updateTask.status;
          }
        });
      
        return res.json({
          message: "task Updated !",
        });
      });

      app.delete(`/task/:id`, (req, res) => {
        const { id } = req.params;
        const newArr = taskArr.filter((fil) => {
          return fil.id !== id;
        });
      
        taskArr = newArr;
      
        return res.json({
          message: "task deleted !",
        });
      });

      app.get(`/task/:id`, (req, res) => {
        const { id } = req.params;
      
        taskArr.map((search) => {
          if (search.id === id || search.title === id) {
            return res.json(search);
          }
        });
      });






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
