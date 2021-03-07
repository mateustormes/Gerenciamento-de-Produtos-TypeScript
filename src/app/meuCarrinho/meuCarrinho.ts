import { global } from "@angular/compiler/src/util";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { produtoObj } from "../models/produtoObj.dto";

@Component({
    selector: 'app-meuCarrinho',
    templateUrl: './meuCarrinho.html',
    styleUrls: ['./meuCarrinho.css']
})
export class MeuCarrinhoComponent{
    constructor(private router: Router){}
    meuCarrinho:Array<produtoObj>=[];
 
    ngOnInit(){
        
    }
}