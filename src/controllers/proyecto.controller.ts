import { Proyecto } from "../models/proyecto";
import * as _daoProyecto from "../dao/proyecto.dao"

export const GetProyecto= async(): Promise<Proyecto[]>=>{
    try {
     return  await _daoProyecto.ListarProyecto()
       
    } catch (error) {
        throw error
    }
}

export const PostProyecto= async(p: Proyecto): Promise<boolean>=>{
    try {
        return await _daoProyecto.CrearProyecto(p)

    } catch (error) {
        throw error
    }
} 

export const PutProyecto= async(p: Proyecto): Promise<boolean>=>{
    try {
        let pro = await _daoProyecto.ActualizarProyecto(p)
        return pro;
    } catch (error) {
        throw error
    }
}

export const DeleteProyecto = async(p: string): Promise<boolean>=>{
    try {
       return await _daoProyecto.EliminarProyecto(parseInt(p))
    } catch (error) {
        throw error
    }
}


