import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { produtoObj } from "../models/produtoObj.dto";
import { UsuarioDTO } from "../models/usuarios.dto";

@Component({
    selector: 'app-catalogoProduto',
    templateUrl: 'catalogoProduto.html',
    styleUrls: ['catalogoProduto.css']
})
export class CatalogoProdutoComponent{
    constructor(private router: Router){}
    usuarioLogin: UsuarioDTO = new UsuarioDTO();
    ngOnInit(){        
      }
 
}