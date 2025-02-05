import { Cliente } from "../models/cliente";
import * as ClienteController from "../controllers/cliente.controller"
import express from "express";

const router = express.Router();

router.get('/listar',(_,rs)=>{
    ClienteController.getCliente()
    .then((obj)=>{
        rs.json(obj)
    }).catch((e)=>{
        rs.status(500).json(e)
    })})
    
router.post('/crear',(rq,rs)=>{
    ClienteController.postCliente(rq.body as Cliente)
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

router.put('/actualizar',(rq,rs)=>{
    ClienteController.putCliente(rq.body as Cliente)
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

router.delete('/eliminar/:nit', (rq,rs)=>{
    ClienteController.deleteCliente(rq.params.nit)
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
    
export default router