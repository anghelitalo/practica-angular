import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UsuariosService} from '../shared/Service/usuarios.service'

@Component({
  selector: 'ap-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  usuario:any;
  constructor(private route:ActivatedRoute, private usuariosService:UsuariosService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuario = this.usuariosService.getUsuario(Number(id));
  }

}
