import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Pamdora', 'Roket', 'Gatubela'];
  borrado: string   = '';


  borrarHeroe(){
    this.borrado = this.heroes.shift() || '';
  }

  /*
  borrarHeroe(valor: number, heroe: string){
    console.log(valor);
    this.borrado = heroe;

    this.heroes.splice(valor, 1);
    console.log(this.heroes);
  }*/


}
