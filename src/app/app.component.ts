import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {usuarioCadastro,usuarioLogado,listaUsuariosCadastrados} from "./global"
import { UsuarioDTO } from './models/usuarios.dto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @Input() usuarioCadastroLocal: UsuarioDTO= new UsuarioDTO();
  @Input() usuarioLogadoLocal: UsuarioDTO = new UsuarioDTO();
  @Input() listaUsuarioCadastradosLocal: UsuarioDTO[] = [];

  entrou:boolean=false; 
  constructor(router: Router){}
  

  ngOnInit(){
  }

  cadastrarUsuario(){
    this.listaUsuarioCadastradosLocal.push(this.usuarioCadastroLocal);
    this.usuarioCadastroLocal = new UsuarioDTO;   
    console.log(this.listaUsuarioCadastradosLocal);
     
  }
  entrarSistema(){
    this.listaUsuarioCadastradosLocal.forEach(items=>{
      if(items.email == this.usuarioCadastroLocal.email && items.senha == this.usuarioCadastroLocal.senha){
        this.entrou=true;
        this.usuarioLogadoLocal = items;
      }
    });
    if(this.entrou){
      console.log('entrou')
    }else{
      console.log('n entrou')
    }
    console.log(this.usuarioLogadoLocal)
  }

  deslogar(){    
    this.entrou=false;
    this.usuarioLogadoLocal = new UsuarioDTO();
  }
}
