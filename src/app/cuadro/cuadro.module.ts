import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    TablaComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkActive
  ],
  exports:[
    TablaComponent,
    ListaComponent
  ]
})
export class CuadroModule { }
