import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Nuevo } from '../interfaces/nuevo.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  constructor(private DbzService: DbzService){}
  //@Input() personajes: Personaje[] = [];
  @Input() nuevo: Nuevo = {
    nombre: '',
    poder : 0
  }

    //ESTAMOS ENVIANDO UN GENERICO CON EL NUEVO PERSONAJE AL PADRE
  //@Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    if(this.nuevo.nombre.trim().length === 0){ return; }
    if(this.nuevo.poder <= 0){ return; }


    console.log(this.nuevo);
    //EMITIENDO EL NUEVO PERSONAJE AL PADRE
    //this.nuevoPersonaje.emit(this.nuevo);

    this.DbzService.agregarPersonaje(this.nuevo);
    //this.personajes.push(this.nuevo);
    this.nuevo= {
      nombre: '', poder: 0
    }


  }
}
