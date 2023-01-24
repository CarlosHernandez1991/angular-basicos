import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Nuevo } from '../interfaces/nuevo.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //personajes: Personaje[] = [];


  //GET optenemos informacion de constructor
  /*
  get personajes(): Personaje[]{
    return this.DbzService.personajes;
  }
  */

  nuevo: Nuevo = {
    nombre: '',
    poder:  0
  }

  /*
  agregarNuevoPersonaje(personaje: Personaje){
    // debugger; //Nos indica para saber caracteristicas de la informacion que estamos enviando.
    console.log('recibiendo emit');
    console.log(personaje);
    this.personajes.push(personaje);
  }
  */
  constructor(
    // private DbzService: DbzService
    ){
    //this.personajes = this.DbzService.personajes;
  }
}
