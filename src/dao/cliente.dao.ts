import { Cliente } from "../models/cliente";
import GetConnection from "../conexion/conexion";
import router from "../routes/usuario.router";
import { pool } from "mssql";


export const ListarCliente = async(): Promise<Cliente[]>=>{
try {
    let sql = "SELECT * FROM Cliente";
    const pool = await GetConnection();
    let rs = await pool.query<Cliente[]>(sql);
        if(rs !=undefined){
            return rs.recordset;
        }return [];
} catch (error) {
    throw error;
}
}

export const CrearCliente = async(c: Cliente): Promise<boolean>=>{
    try {
        let sql = `INSERT INTO Cliente(nombre,nombreContacto,contacto,estado)
        VALUES('${c.nombre}','${c.nombreContacto}','${c.contacto}',${c.estado})`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if(rs){
            rs.rowsAffected.length==1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const ActualizarCliente = async(c: Cliente): Promise <boolean>=>{
    try {
        let sql = `UPDATE Cliente SET nombre ='${c.nombre}',nombreContacto='${c.nombreContacto}',
        contacto='${c.contacto}',estado=${c.estado} WHERE nit=${c.nit}`;
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


export const EliminarCliente= async(nit: number): Promise<boolean>=>{
    try {
        let sql = `DELETE FROM Cliente WHERE nit = ${nit}`;
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

