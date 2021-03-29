import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioDTO } from "../models/usuarios.dto";
import {globalVariables, listaProdutos} from "../global"
@Component({
    selector: 'app-desenvolvedor',
    templateUrl: 'desenvolvedor.html',
    styleUrls: ['desenvolvedor.css']
})
export class DesenvolvedorComponent{
    constructor(private router: Router){}
    usuarioLogin: UsuarioDTO = new UsuarioDTO();
    ngOnInit(){         
      }
      
 
}