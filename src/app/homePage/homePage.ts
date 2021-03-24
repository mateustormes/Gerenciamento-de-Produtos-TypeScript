import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioDTO } from "../models/usuarios.dto";
import {listaProdutosCadastrados,listaProdutosEletronicosCadastrados, qtdeProduto,objSelecionado,meuCarrinho} from "../global"
import { produtoObj } from "../models/produtoObj.dto";
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