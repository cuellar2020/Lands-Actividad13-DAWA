export class Lead{
    _id?: number;
    dni:String;
    telefono: string;
    

    constructor(dni: string, telefono: string){
        this.dni=dni;
        this.telefono = telefono;
       
    }
}