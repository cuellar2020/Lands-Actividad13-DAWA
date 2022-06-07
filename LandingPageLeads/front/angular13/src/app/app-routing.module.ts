import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//component
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarComponent } from './components/listar/listar.component';
const routes: Routes = [{
  path:'',component:ListarComponent
},
{ path: 'crear-registro', component: CrearRegistroComponent},
{ path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
