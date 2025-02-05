export class Usuario{
    id: number;
    nombre: string;
    apellido: string;
    documento: number;
    estado: number;

    constructor(){
        this.id=0;
        this.nombre='';
        this.apellido= '';
        this.documento = 0;
        this.estado=0;
    }
}