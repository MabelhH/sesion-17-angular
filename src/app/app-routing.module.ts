import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './cuadro/lista/lista.component';
import { TablaComponent } from './cuadro/tabla/tabla.component';

const routes: Routes = [
  {path:'lista',component:ListaComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
  {path:'tabla/:id',component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
