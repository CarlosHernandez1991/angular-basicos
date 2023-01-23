import {Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  //templateUrl: './contador.component.html',
  template: `
      <h1>{{title}}</h1>
      <h3>La base es: <strong>{{base}}</strong></h3>
      <div class="primerstilo">

        <button (click)="acumular(base)"> +{{base}} </button>
          <span>{{number}}</span>
        <button (click)="acumular(-base)"> -{{base}} </button>

      </div>

  `
})

export class ContadorComponent {

  title: string = 'Mi app Component';
  base: number = 5;
  number: number = 0;

  acumular(valor: number){
    this.number += valor;
  }

}
