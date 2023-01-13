import { Component,Input,Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

 @Input() producto:any;
 @Output() guardar= new EventEmitter<any>;
 
 actulisar(){
console.log(this.producto);
this.guardar.emit(this.producto)
 }
} 
