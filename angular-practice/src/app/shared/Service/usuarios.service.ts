import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {
  usuarios=[
    {id: 1, nombre:'Eli',apellido:'Lopez'},
    {id: 2, nombre:'Andre',apellido:'Hurtado'},
    {id: 3, nombre:'Josue',apellido:'Camacho'},
    {id: 4, nombre:'Gabriela',apellido:'Rojas'},
    {id: 5, nombre:'Andrea',apellido:'Velasco'}
  ]

  constructor() { }
  
  getUsuarios(){
    return this.usuarios;
  }
  
  getUsuario(id:number){
    return this.getUsuarios().find(usuario => usuario.id === id);
  }
}
