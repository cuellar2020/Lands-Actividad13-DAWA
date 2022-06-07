export class Lead{
    _id?: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: String; 

    constructor(nombre: string, email: string, telefono: string, direccion: string){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}