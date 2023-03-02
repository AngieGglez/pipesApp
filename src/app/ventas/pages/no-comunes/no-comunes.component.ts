import { Component } from '@angular/core';
import { rejects } from 'assert';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre: string = 'Noa';
  genero: string = 'femenino';

  invitacionMapa = { //Objeto con las diferentes opciones y equivalencias
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  //i18nPlural
  clientes: string[] = ['Maria','Pedro', 'Hernando','Eduardo','Fernando'];

  clientesMapa = {//Objeto con las diferentes opciones y equivalencias
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Mia';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre:'Mia',
    edad:35,
    direccion:'Granada, España'
  }


  //JsonPipe

  heroes = [
    {
    nombre: 'Superman',
    vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman Momoa',
      vuela: false
    }
  ];

  //AsyncPipe

    //Observable
    miObservable = interval(2000); // 0,1,2,3,4,5,6...

    //Promesa
    valorPromesa = new Promise((resolve, reject)=>{
      //Resolve si se resuleve bien o reject si hay algún error
      setTimeout(() =>{
        resolve('Tenemos data de promesa')
      },3500);
    });

}
