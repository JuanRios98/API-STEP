import { Actividad } from "../models/actividad";
import GetConnection from "../conexion/conexion";

export const ListarActividad = async(): Promise<Actividad[]>=>{
    try {
        let sql = "SELECT * FROM Actividad";
        const pool = await GetConnection();
        let rs = await pool.query<Actividad[]>(sql);
        if(rs != undefined){
           return rs.recordset;
        }
        return []
    } catch (error) {
        throw error
    }
}

export const crearActividad = async(a: Actividad): Promise<boolean>=>{
    try {
        let sql = `INSERT INTO Actividad(proyectoId,nit,usuarioId,actividad,FechaInicio,fechaFin,
        fechaRealCierre,estado)
        VALUES (${a.proyectoId},${a.nit},${a.usuarioId},'${a.actividad}','${a.fechaInicio}','${a.fechaFin}',
        '${a.fechaRealCierre}',${a.estado})`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            rs.rowsAffected.length==1
        }
        return false
    } catch (error) {
        throw error
    }
}

export const eliminarActividad = async(id: number): Promise<boolean>=>{
    try {
        let sql= `DELETE FROM Actividad WHERE id=${id}`;
        const pool= await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length==1
          
        }
        return false;
    } catch (error){
        throw error;        
    }
}