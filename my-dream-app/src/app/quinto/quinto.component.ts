import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.css']
})
export class QuintoComponent implements OnInit {

  
  alumnnoComponent5: Alumno={
    
    nombre: 'David',
    apellido: 'Morales',
    edad: 42,
    curso: 2013,
    fecha: '01/06/2019',
    telefono: 684556754
  }

  constructor() { }

  ngOnInit() {

    
  }

}
