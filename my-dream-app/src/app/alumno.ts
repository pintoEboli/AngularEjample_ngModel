export class Alumno{

    nombre: string;
    apellido: string;
    edad: number;
    curso: number;
    fecha: string;
    telefono: number;

    
    constructor(nombre,apellido,edad,curso,fecha,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.fecha = fecha;
        this.telefono = telefono;
    }
    
}