export class Actividad{
    id: number;
    proyectoId: Number;
    nit: number;
    usuarioId: number;
    actividad: string;
    fechaInicio: Date;
    fechaFin: Date;
    fechaRealCierre: Date;
    estado: number

    constructor(){
        this.id = 0,
        this.proyectoId = 0,
        this.nit = 0,
        this.usuarioId= 0,
        this.actividad="",
        this.fechaInicio= new Date(),
        this.fechaFin= new Date(),
        this.fechaRealCierre = new Date(),
        this.estado=0
    }
}