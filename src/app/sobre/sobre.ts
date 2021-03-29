import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {usuarioCadastro,usuarioLogado,listaUsuariosCadastrados,globalVariables} from "../global"
@Component({
    selector: 'app-sobre',
    templateUrl: 'sobre.html',
    styleUrls: ['sobre.css']
})
export class SobreComponent{
    constructor(private router: Router){}
    ngOnInit(){        
    }
}