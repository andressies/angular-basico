  import { Component } from '@angular/core';

@Component({
     selector: 'app-contador',
     template: `
     <h1>{{title}}</h1>

     <h1>la base es: <strong> {{base}} </strong></h1>
     
     <button (click)="acumular(this.base)"> +{{base}} </button>
     
     <span> {{numero}} </span>
     
     <button (click)= "acumular(-this.base)"> -{{base}} </button>
     `
})

export class ContadorComponent{
    public title: string = 'Contador App';
    public numero: number = 10;

  //tarea

    public base: number =5;

    acumular(valor: number){
        this.numero += valor;
 }

}