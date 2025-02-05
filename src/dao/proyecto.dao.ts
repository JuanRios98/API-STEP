import { Proyecto } from "../models/proyecto";
import GetConnection from "../conexion/conexion";


export const ListarProyecto = async (): Promise<Proyecto[]>=>{
    try {
        let sql= 'SELECT * FROM Proyecto';
        const pool= await GetConnection();
        let rs= await pool.query<Proyecto[]>(sql)
        if(rs != undefined){
            return rs.recordset;
        }
            return []
    } catch (error) {
        throw error
    }
}

export const CrearProyecto = async(p: Proyecto): Promise<boolean>=>{
    try {
        let sql= `INSERT INTO Proyecto(nit,nombre,fechainicio,fechafin,estado)
        VALUES (${p.nit},'${p.nombre}','${p.fechaInicio}','${p.fechaFin}',${p.estado})`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
    if(rs){
       return rs.rowsAffected.length==1;
    }
       return false;

    } catch (error) {
        throw error;
    }
}

export const ActualizarProyecto = async(p: Proyecto): Promise<boolean>=>{
    try {
        let sql = `UPDATE Proyecto SET nit='${p.nit}', nombre='${p.nombre}',
        fechaInicio= '${p.fechaInicio}',
        fechaFin='${p.fechaFin}',
        fechaRealCierre='${p.fechaRealCierre}',
        estado=${p.estado} WHERE id= ${p.id}`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
           return rs.rowsAffected.length ==1;
        }else{
            return false;
        }
    } catch (error) {
        throw error; 
    }
}
export const EliminarProyecto = async(Proyecto:number): Promise<boolean>=>{
    try {
        let sql = `DELETE FROM Proyecto WHERE id= ${Proyecto}`;
        const pool= await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length ==1;
        } 
            return false
    } catch (error) {
        throw error
        
    }
}