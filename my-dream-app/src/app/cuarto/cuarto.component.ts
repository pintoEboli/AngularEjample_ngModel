import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {

   //Declaramos la variable de tipo Alumno
   alumnnoComponent4: Alumno = {
    nombre: 'David',
    apellido: 'Morales',
    edad: 42,
    curso: 2013,
    fecha: '01/06/2019',
    telefono: 684556754
   };

  constructor() { }

  ngOnInit() {
    //this.alumnnoComponent.edad = 42;
    //this.alumnnoComponent.curso = 2013;
  }

}
