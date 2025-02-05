import { Proyecto } from "../models/proyecto";
import * as ProyectoController from "../controllers/proyecto.controller"
import express from "express"

const router = express.Router()

router.get('/listar', (_,rs)=>{
    ProyectoController.GetProyecto()
    .then((obj)=>{
        return rs.json(obj)
    }).catch((e)=>{
        rs.status(500).json(e)
    })})


router.post('/crear', (rq,rs)=>{
    ProyectoController.PostProyecto(rq.body as Proyecto)
    .then((obj)=>{
        if(obj){
            rs.status(200).send()
        }else{
            rs.status(409).send()
        }
    }).catch((e)=>{
        rs.status(500).json(e)
    })
})    

router.delete('/eliminar/:id', (rq,rs)=>{
    ProyectoController.DeleteProyecto(rq.params.id)
    .then((obj)=>{
        if(obj){
            return rs.status(200).send()
        }else{
            return rs.status(409).send()
        }
    }).catch((e)=>{
        return rs.status(500).json(e)
    })
})

router.put('/actualizar',(rq,rs)=>{
    ProyectoController.PutProyecto(rq.body as Proyecto)
    .then((obj)=>{
        if(obj){
            return rs.status(200).send();
        }else{
            return rs.status(409).send();
        }
    }).catch((e)=>{
        return rs.status(500).json(e);
    })
})
export default router