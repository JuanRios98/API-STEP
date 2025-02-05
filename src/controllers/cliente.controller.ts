import { Cliente } from "../models/cliente";
import * as _daoCliente from "../dao/cliente.dao"
import { Actividad } from "../models/actividad";

export const getCliente = async(): Promise<Cliente[]>=>{
    try {
        let c = await _daoCliente.ListarCliente();
        return c;
    } catch (error) {
        throw error;
    }
}

export const postCliente = async(cliente: Cliente): Promise<boolean>=>{
    try {
        let c = await _daoCliente.CrearCliente(cliente);
        return c;
    } catch (error) {
        throw error;
    }
}

export const putCliente= async(cliente: Cliente): Promise<boolean>=>{
    try {
        let c = await _daoCliente.ActualizarCliente(cliente);
        return c;
    } catch (error) {
        throw error;
    }
}

export const deleteCliente= async(nit: string): Promise<boolean>=>{
    try {
        let c = await _daoCliente.EliminarCliente(parseInt(nit));
        return c;
    } catch (error) {
        throw error;
    }
}