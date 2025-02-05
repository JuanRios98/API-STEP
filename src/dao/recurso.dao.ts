import GetConnection from "../conexion/conexion";
import { Recurso,} from "../models/recurso";



 export const ListarRecursos= async (): Promise<Recurso[]> =>{
     try {
         let sql = "SELECT * FROM Recurso";
         const pool= await GetConnection();
         let rs = await pool.query<Recurso[]>(sql);
             if(rs != undefined){
                 return rs.recordset;
             }
             return [];
     } catch (error) {
         throw error;   
     }
 }

 export const CrearRecurso = async(r: Recurso): Promise<boolean>=>{
     try {
         let sql = `INSERT INTO Recurso(nombre,cantidad) VALUES
         ('${r.nombre}','${r.cantidad}')`;
         const pool = await GetConnection();
         let rs = await pool.query(sql);
         if(rs){
             return rs.rowsAffected.length==1
         }
         return false
     } catch (error) {
         throw error
     }
 }

 export const ActualizarRecurso = async(r: Recurso): Promise<boolean>=>{
    try {
        let sql= `UPDATE Recurso SET nombre = '${r.nombre}', cantidad = ${r.cantidad}`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length ==1
        }else{
            return false
        }
    } catch (error) {
        throw error
    }
 }

 export const EliminarRecurso= async(recurso: number): Promise<boolean>=>{
    try {
        let sql= `DELETE FROM Recurso WHERE id= ${recurso}`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length == 1;
        }
        return false
    } catch (error) {
        throw error
    }
 }

