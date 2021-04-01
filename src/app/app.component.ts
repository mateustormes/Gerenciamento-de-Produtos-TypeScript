import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import {usuarioCadastro,usuarioLogado,listaUsuariosCadastrados} from "./global"
import { UsuarioDTO } from './models/usuarios.dto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @Input() usuarioCadastroLocal: UsuarioDTO= usuarioCadastro;
  @Input() usuarioLogado: UsuarioDTO = usuarioLogado;
  @Input() listaUsuarioCadastradosLocal: UsuarioDTO[] = listaUsuariosCadastrados;
  entrou:boolean=false; 
  constructor(private router: Router){}
  

  ngOnInit(){
    console.log(usuarioLogado);
    if(usuarioLogado.email == ""){
      this.router.navigate(['/login'])
    }
    
  }

  

  deslogar(){    
    this.entrou=false;
    this.router.navigate(['/login'])
  }
}
