import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {UsuariosComponent} from './usuarios/usuarios.component'
import {UsuarioComponent} from './usuario/usuario.component'
import {LoginGuard} from './login.guard'
import {NoLoginGuard} from './no-login.guard'
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[NoLoginGuard]},
  {path:'dashboard',component:DashboardComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'usuarios/:id',component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard,NoLoginGuard]
})
export class AppRoutingModule { }
