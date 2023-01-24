import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()

export class DbzService{

  constructor(){
    //Sconsole.log('Iniciando Servicio...');
  }

  private _personajes: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegueta', poder: 14000}
  ];

  get personajes(): Personaje[]{
    return [...this._personajes]
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push( personaje );
    //AGREGAMOS EL PERSONAJE A LA CLAVE PRIVADA...
  }

}
