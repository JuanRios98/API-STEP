import { Recurso } from "../models/recurso";
import * as _daoRecurso from "../dao/recurso.dao"


 export const getRecurso = async (): Promise<Recurso[]> =>{
      try {
        let r = await _daoRecurso.ListarRecursos()
        return r
      } catch (error) {
          throw error
      }
  }

 export const PostRecurso = async(recurso: Recurso): Promise<boolean>=>{
   try {
     let r = await _daoRecurso.CrearRecurso(recurso)
     return r
   } catch (error) {
     throw error
   }
 }

 export const PutRecurso = async (Recurso: Recurso): Promise<boolean>=>{
  try {
    let r= await _daoRecurso.ActualizarRecurso(Recurso);
    return r
  } catch (error) {
    throw error
  }
 }

 export const DeleteRecurso = async(Recurso: string): Promise<boolean>=>{
  try {
      return await _daoRecurso.EliminarRecurso(parseInt(Recurso));
  } catch (error) {
      throw error
  }
 }

