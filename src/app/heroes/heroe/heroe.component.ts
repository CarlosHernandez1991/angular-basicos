
import {Component} from '@angular/core'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})


export class HeroeComponent{
  title : string = 'Heroe';
  nombre: string = 'Ironman';
  edad  : number = 50;


  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }


  optenerNombre(): string{
      return `${this.nombre} - ${ this.edad }`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void{
    this.edad = 30;
  }



}
