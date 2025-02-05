import { pool} from "mssql";
import GetConnection from "../conexion/conexion";
import { Usuario } from "../models/usuario";


export const ListarUsuarios= async (): Promise<Usuario[]> =>{
    try {
        let sql = "SELECT * FROM Usuario";
        const pool= await GetConnection();
        let rs = await pool.query<Usuario[]>(sql);
            if(rs != undefined){
                return rs.recordset;
            }
            return [];
    } catch (error) {
        throw error;   
    }
}


export const CrearUsuarios = async(u: Usuario): Promise<boolean>=>{
    try {
        let sql = `INSERT INTO Usuario(nombre,apellido,documento,estado) 
        VALUES ('${u.nombre}','${u.apellido}',${u.documento},${u.estado})`
        const pool= await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}
export const ActualizarUsuarios = async(us: Usuario): Promise<boolean>=>{
    try {
        let sql =  `UPDATE usuario SET nombre ='${us.nombre}', apellido= '${us.apellido}',documento='${us.documento}', estado= '${us.estado}' WHERE id = ${us.id}`
        const pool= await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}



export const EliminarUsuario= async(us: number): Promise<boolean>=>{
    try {
        let sql = `DELETE FROM Usuario WHERE id = ${us}`;
        const pool = await GetConnection()
        let rs = await pool.query(sql);
        if(rs){
            return rs.rowsAffected.length==1
        }
        return false
    } catch (error) {
        throw error
    }
}



