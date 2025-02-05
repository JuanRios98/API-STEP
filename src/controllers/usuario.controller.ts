import { Usuario } from "../models/usuario";
import * as _daoUsuario from '../dao/usuario.dao'


export const getUsuarios = async (): Promise<Usuario[]> =>{
 try {
    let u =  await _daoUsuario.ListarUsuarios();
    return u
 } catch (error) {
    throw error
 }
}

export const postUsuario = async(usuario: Usuario): Promise<boolean>=>{
   try {
      let u = await _daoUsuario.CrearUsuarios(usuario);
      return u;
   } catch (error) {
      throw error;
   }
}


export const putUsuario = async(usuario: Usuario): Promise<boolean>=>{
   try {
      return await _daoUsuario.ActualizarUsuarios(usuario);
   } catch (error) {
      throw error;
   }
}

export const deleteUsuario = async(u: string): Promise<boolean>=>{
   try {
      return await _daoUsuario.EliminarUsuario(parseInt(u));
      
   } catch (error) {
      throw error
   }
}


