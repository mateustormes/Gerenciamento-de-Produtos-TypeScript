import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioDTO } from "../models/usuarios.dto";

@Component({
    selector: 'app-homePage',
    templateUrl: 'homePage.html',
    styleUrls: ['homePage.css']
})
export class HomePageComponent{
    constructor(private router: Router){}
    usuarioLogin: UsuarioDTO = new UsuarioDTO();
    ngOnInit(){        
      }
 
}