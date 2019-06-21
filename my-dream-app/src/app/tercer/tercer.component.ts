import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../alumno';
import { $, Button } from 'protractor';


@Component({
  selector: 'app-tercer',
  templateUrl: './tercer.component.html',
  styleUrls: ['./tercer.component.css']
})

export class TercerComponent implements OnInit {

  //Declaramos la variable de tipo obj Alumno y llamamos al constructor y seteamos valores
  //Tengo que crear una instancia del objeto 
  alumnnoComponent3 = new Alumno('PEPE','Morales',42,2013,'01/06/2019',684556754);
  
  //Para que lo observe en el template 
  @ViewChild('nombreInput',{read:false}) nombreInput:any;
  @ViewChild('apellidoInput',{read:false}) apellidoInput:any;
  @ViewChild('edadInput',{read:false}) edadInput:any;
  @ViewChild('direccionInput',{read:false}) direccionInput:any;
  @ViewChild('id',{read:false}) id:any;
  
  //Variables recogidas por ngModel
  idModel = 1;
  nombreInputModel   = '';
  apellidoInputModel = '';
  edadInputModel     = '';
  direccionInputModel = '';
  selectorModel = '';
  mostrarAlumno:boolean   = false;
  mostrarProfesor:boolean = false;
  disableId:boolean = false;

 
  idModelPro = 1;
  nombreProfesorInputModel = '';
  cursoInputCurso = '';

  //Array del tipo Alumno , para recoger los valores del formulario
  arrayAlumnos: AlumnoInput [] = [];
  arrayProfesor: ProfesorInput [] = [];
  //Defino un array de nombres
  public nombres = [
    {nom:"uno",edad:10,color:"blue"},
    {nom:"dos",edad:20,color:"red"},
    {nom:"tres",edad:30,color:"yellow"}
  ];

   //Defino un array de nombres
   public alumnos = [
    {nom:"uno",edad:10,color:"blue"},
    {nom:"dos",edad:20,color:"red"},
    {nom:"tres",edad:30,color:"yellow"}
  ];

  title2 = "Ejemplo ngSwitch";
  title3 = "Ejemplo ngClass";
  title4 = "Funcion click";
  title5 = "Recoger elementos para un form(sol: menos utilizada)";
  color  = 'yellow';
  arrayVacio:boolean = true;
  titulo_seleccionado:string;
 
  ngOnInit() {    
  }

  /**
   * Elimina elementos del array y setea valor de arrayVacio
   * @param event 
   * @param i 
   */

  eliminarDatos(event,i){
    //Elimina un elemento segun su indice
    this.alumnos.splice(i,1);
    alert("Registro eliminado n:" + i);
    if(this.alumnos.length < 1 ){
      alert("longitud del arr: " + this.alumnos.length);
      this.arrayVacio=false;
    }
  }

  /**
   * Carga de nuevo los valores del Array y setea el valor de Vacio a true
   */
  cargarArr(){
    this.alumnos = [
      {nom:"uno",edad:10,color:"blue"},
      {nom:"dos",edad:20,color:"red"},
      {nom:"tres",edad:30,color:"yellow"}
    ];
    this.arrayVacio=true;
  }

  finishModel(){
    if(this.idModel > 0)
      this.disableId = true;

      let alumnoModelNew = new AlumnoInput(this.idModel,this.nombreInputModel,this.apellidoInputModel);
      this.arrayAlumnos.push(alumnoModelNew);
      alert("Variable recogida: "+ this.idModel  + " " +this.nombreInputModel + " " + this.apellidoInputModel + " " + this.edadInputModel + " " + this.direccionInputModel );
      this.idModel++;
  }

  finishModelProfesor(){
    if(this.idModelPro > 0)
      this.disableId = true;

      let profesorNew = new ProfesorInput(this.idModelPro,this.nombreProfesorInputModel,this.cursoInputCurso);
      this.arrayProfesor.push(profesorNew);
      alert("Variable recogida: "+ this.idModelPro  + " " +this.nombreProfesorInputModel + " " + this.cursoInputCurso );
      this.idModelPro++;
  }

  mostrarForm(){
     //pasar a ternario
    if(this.selectorModel == "alumnos"){
      this.mostrarAlumno   = true;
      this.mostrarProfesor = false;
      this.titulo_seleccionado="Nuevos Alumnos";
    }else{
      this.mostrarAlumno   = false;
      this.mostrarProfesor = true;
      this.titulo_seleccionado="Nuevos Profesores";
    }  
    //this.mostrarAlumno = this.selectorModel === "alumnos" ? true : false;
    //this.mostrarProfesor = this.selectorModel === "profesores" ? true : false;
   }

  /**
   * Metodo sin ngModel
   */
  finish(){
    alert( this.nombreInput.nativeElement.value + this.apellidoInput.nativeElement.value);
    //Comprobamos que el valor es distinto a vacio 
    if(this.id.nativeElement.value == "") this.id.nativeElement.value = 1;
    
    //valido que id este a false
    if(!this.id.nativeElement.disabled) 
      this.id.nativeElement.disabled = true;

      //creamos las instancia del mObj Alumno
      let newAlumno = new AlumnoInput(this.id.nativeElement.value,this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
      this.arrayAlumnos.push(newAlumno);
    
      //incrementamos el id
      this.id.nativeElement.value++;
  }
}

class AlumnoInput {
  id:number;
  nombre:string;
  apellido:string;

  constructor(id, nombre, apellido ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido= apellido;
  }
}

class ProfesorInput {
  id:number;
  nombre:string;
  curso:number;

  constructor(id, nombre, curso) {
    this.id     = id;
    this.nombre = nombre;
    this.curso  = curso;
  }
}
