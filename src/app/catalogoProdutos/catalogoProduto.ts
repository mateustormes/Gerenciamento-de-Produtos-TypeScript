import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { produtoObj } from "../models/produtoObj.dto";

@Component({
    selector: 'app-catalogoProduto',
    templateUrl: 'catalogoProduto.html',
    styleUrls: ['catalogoProduto.css']
})
export class CatalogoProdutoComponent{
    constructor(private router: Router){}
    listaProdutos:Array<produtoObj>=[];

    listaProdutosEletronicos:Array<produtoObj>=[];
    ngOnInit(){
        let obj= new produtoObj();
        obj.nome="Boné Masculino";
        obj.preco=19.99;
        obj.foto="assets/bone.png";
        this.listaProdutos.push(obj);
        
        
        let obj2= new produtoObj();
        obj2.nome="Camisa Masculina";
        obj2.preco=29.99;
        obj2.foto="assets/camisa.png";
        this.listaProdutos.push(obj2);
    
        
        let obj3= new produtoObj();
        obj3.nome="Calça Masculino";
        obj3.preco=49.99;
        obj3.foto="assets/calca.png";
        this.listaProdutos.push(obj3);
    
        let obj4= new produtoObj();
        obj4.nome="Vestido";
        obj4.preco=89.99;
        obj4.foto="assets/vestido.png";
        this.listaProdutos.push(obj4);
    
        let obj5= new produtoObj();
        obj5.nome="Colar";
        obj5.preco=169.99;
        obj5.foto="assets/colar.png";
        this.listaProdutos.push(obj5);

        let obj6= new produtoObj();
        obj6.nome="Playstation 4";
        obj6.preco=1999.99;
        obj6.foto="assets/play4.png";
        this.listaProdutosEletronicos.push(obj6);

        let obj7= new produtoObj();
        obj7.nome="Playstation 5";
        obj7.preco=2999.99;
        obj7.foto="assets/play5.png";
        this.listaProdutosEletronicos.push(obj7);

        let obj8= new produtoObj();
        obj8.nome="Computador";
        obj8.preco=1499.99;
        obj8.foto="assets/computador.png";
        this.listaProdutosEletronicos.push(obj8);

        let obj9= new produtoObj();
        obj9.nome="Notebook";
        obj9.preco=1599.99;
        obj9.foto="assets/notebook.png";
        this.listaProdutosEletronicos.push(obj9);

        let obj10= new produtoObj();
        obj10.nome="Camera";
        obj10.preco=499.99;
        obj10.foto="assets/camera.png";
        this.listaProdutosEletronicos.push(obj10);
        
      }

      olho(){
          console.log('test');
          
      }
}