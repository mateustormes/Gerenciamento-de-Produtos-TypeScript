import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioDTO } from "../models/usuarios.dto";
import {usuarioCadastro,usuarioLogado,listaUsuariosCadastrados} from "../global"
@Component({
    selector: 'app-login',
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginComponent{
    constructor(private router: Router){}
    @Input() usuarioCadastroLocal: UsuarioDTO= new UsuarioDTO();
    @Input() usuarioLogado: UsuarioDTO = new UsuarioDTO();
    @Input() listaUsuarioCadastradosLocal: UsuarioDTO[] = [];
    entrou:boolean=false; 
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
          this.router.navigate(['/homePage'])
        }else{
          console.log('n entrou')
        }
        console.log(usuarioLogado);
        console.log(this.usuarioLogado);
        
      }
}