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
  @Input() usuarioLogado: UsuarioDTO = new UsuarioDTO();
  @Input() listaUsuarioCadastradosLocal: UsuarioDTO[] = [];
  entrou:boolean=false; 
  constructor(router: Router){}
  

  ngOnInit(){
  }

  cadastrarUsuario(){
    this.listaUsuarioCadastradosLocal.push(this.usuarioCadastroLocal);
    this.usuarioCadastroLocal = new UsuarioDTO;        
  }
  entrarSistema(){
    this.listaUsuarioCadastradosLocal.forEach(items=>{
      if(items.email == this.usuarioCadastroLocal.email && items.senha == this.usuarioCadastroLocal.senha){
        this.entrou=true;
        this.usuarioLogado = items;
      }
    });
    if(this.entrou){
      usuarioLogado.rg = this.usuarioLogado.rg;
      usuarioLogado.cpf = this.usuarioLogado.cpf;
      usuarioLogado.email = this.usuarioLogado.email;
      usuarioLogado.nomeCompleto = this.usuarioLogado.nomeCompleto;
      usuarioLogado.senha = this.usuarioLogado.senha;
      console.log('entrou')
    }else{
      console.log('n entrou')
    }
  }

  deslogar(){    
    this.entrou=false;
    this.usuarioLogado = new UsuarioDTO();
    usuarioLogado.cpf="";
    usuarioLogado.rg="";
    usuarioLogado.email="";
    usuarioLogado.senha="";
    usuarioLogado.nomeCompleto="";
  }
}
