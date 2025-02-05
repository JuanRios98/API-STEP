import { Recurso } from "../models/recurso";
import * as RecursoController from "../controllers/recurso.controller"
import express, { Router } from "express";


const router = express.Router()

router.get('/listar', (_,rs)=>{
   RecursoController.getRecurso()
           .then((obj)=>{
              rs.json(obj);
           })
           .catch((e)=>{
              rs.status(500).json(e)
           })
  });

 router.post('/crear',(rq,rs)=>{
    RecursoController.PostRecurso(rq.body as Recurso)
    .then((obj)=>{
       if(obj){
          rs.status(200).send();
       }else{
          rs.status(409).send();
       }
    }).catch((e)=>{
       rs.status(500).json(e)
    })
 })

 router.put('/actualizar', (rq,rs)=>{
   RecursoController.PutRecurso(rq.body as Recurso)
   .then((obj)=>{
      if(obj){
         rs.status(200).send();
      }else{
         rs.status(500).send();
      }
   }).catch((e)=>{
      rs.status(500).json(e)
   })
 })

 router.delete('/eliminar/:id', (rq,rs)=>{
      RecursoController.DeleteRecurso(rq.params.id)
      .then((obj)=>{
         if(obj){
            rs.status(200).send();
         }else{
            rs.status(400).send();
         }
      }).catch((e)=>{
         return rs.status(500).json(e);
      })
  
 })

export default router