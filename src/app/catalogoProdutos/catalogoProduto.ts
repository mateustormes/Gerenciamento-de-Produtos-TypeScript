import { Component } from "@angular/core";
import { Router } from "@angular/router";

import {meuCarrinho} from "../global"

@Component({
    selector: 'app-catalogoProduto',
    templateUrl: 'catalogoProduto.html',
    styleUrls: ['catalogoProduto.css']
})
export class CatalogoProdutoComponent{
    constructor(private router: Router){}
    ngOnInit(){  
        console.log(meuCarrinho);
        
    }
 
}