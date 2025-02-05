import { Actividad } from "../models/actividad";
import * as _daoActividad from "../dao/actividad.dao";

export const GetActividad = async(): Promise<Actividad[]>=>{
    try {
        let a = await _daoActividad.ListarActividad();
        return a;
    } catch (error) {
        throw error;
    }
}

export const PostActvidiad = async(actividad: Actividad): Promise<boolean>=>{
    try {
        let a = await _daoActividad.crearActividad(actividad);
        return a;
    } catch (error) {
        throw error;
    }

}

export const DeleteActividad = async(ac: string): Promise<boolean>=>{
    try {
        let a = await _daoActividad.eliminarActividad(parseInt(ac));
        return a;
    } catch (error) {
        throw error;
    }
}
