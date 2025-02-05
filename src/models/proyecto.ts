export class Proyecto{
    id: number;
    nit: number;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    fechaRealCierre: Date;
    estado: number;

    constructor(){  
        this.id=0;
        this.nit=0;
        this.nombre= "";
        this.fechaFin= new Date();
        this.fechaInicio= new Date();
        this.fechaRealCierre= new Date();
        this.estado= 0
    }
}