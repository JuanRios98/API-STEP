import express  from "express";
import * as UsuarioController from  '../controllers/usuario.controller';
import { Usuario } from "../models/usuario";


const router = express.Router();

router.get('/listar', (_, rs)=>{
    UsuarioController.getUsuarios()
        .then((obj)=>{
            rs.json(obj)
        })
        .catch((e)=>{
            rs.status(500).json(e)
        })
});


router.post('/crear', (rq,rs)=>{
      UsuarioController.postUsuario(rq.body as Usuario)
      .then((obj)=>{ 
        if(obj){
            rs.status(200).send()
        } else{
            rs.status(409).send()
        }      
      })
      .catch((e)=>{
        rs.status(500).json(e)
      })  
});

router.put('/actualizar', (rq,rs)=>{
    UsuarioController.putUsuario(rq.body as Usuario)
        .then((obj)=>{
            if(obj){
                rs.status(200).send()
            }else{
                rs.status(500).send()
            }
        }).catch((e)=>{
                rs.status(500).json(e)
        })
})


router.delete('/eliminar/:id', (rq,rs)=>{
    UsuarioController.deleteUsuario(rq.params.id)
    .then((obj)=>{
        if(obj){
        rs.status(200).send()
    }else{
        rs.status(400).send()
    }
    }).catch((e)=>{
        rs.status(500).json(e)
    })
})
    
export default router;