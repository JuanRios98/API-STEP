import { Actividad } from "../models/actividad";
import * as _ActividadController from "../controllers/actividad.controller";
import express from "express";

const router = express.Router()

router.get('/listar',(_,rs)=>{
    _ActividadController.GetActividad()
    .then((obj)=>{
        rs.json(obj)
    }).catch((e)=>{
        rs.status(500).json(e)
    })
});

router.post('/crear', (rq,rs)=>{
    _ActividadController.PostActvidiad(rq.body as Actividad)
    .then((obj)=>{
        rs.json(obj)
    }).catch((e)=>{
        rs.status(500).json(e)
    })
})

router.delete('/eliminar/:id',(rq,rs)=>{
    _ActividadController.DeleteActividad(rq.params.id)
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

export default router;