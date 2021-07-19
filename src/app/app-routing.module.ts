import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Colaborador/agregar/agregar.component';
import { EditarComponent } from './Colaborador/editar/editar.component';
import { ListarComponent } from './Colaborador/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'editar',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
