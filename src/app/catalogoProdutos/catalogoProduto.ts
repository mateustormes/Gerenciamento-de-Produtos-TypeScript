import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioDTO } from "../models/usuarios.dto";
import {listaProdutosCadastrados,listaProdutosEletronicosCadastrados, qtdeProduto,objSelecionado,meuCarrinho} from "../global"
import { produtoObj } from "../models/produtoObj.dto";

@Component({
    selector: 'app-catalogoProduto',
    templateUrl: 'catalogoProduto.html',
    styleUrls: ['catalogoProduto.css']
})
export class CatalogoProdutoComponent{
    @Input() listaProdutosCadastrados:Array<produtoObj>= [];
    @Input() listaProdutosEletronicosCadastrados:Array<produtoObj>= [];
    @Input() qtdeProduto: number=0;
    @Input() objSelecionado:produtoObj = new produtoObj();

    @Input() meuCarrinho:Array<produtoObj>=[];
    constructor(private router: Router){}
    ngOnInit(){  
        this.iniciarProdutosCatalogo();
    }
    iniciarProdutosCatalogo(){
        let obj= new produtoObj();
        obj.codigo=0;
        obj.nome="Boné Masculino";
        obj.preco=19.99;
        obj.foto="assets/bone.png";
        this.listaProdutosCadastrados.push(obj);
        
        
        let obj2= new produtoObj();
        obj2.codigo=1;
        obj2.nome="Camisa Masculina";
        obj2.preco=29.99;
        obj2.foto="assets/camisa.png";
        this.listaProdutosCadastrados.push(obj2);
    
        
        let obj3= new produtoObj();
        obj3.codigo=2;
        obj3.nome="Calça Masculino";
        obj3.preco=49.99;
        obj3.foto="assets/calca.png";
        this.listaProdutosCadastrados.push(obj3);
    
        let obj4= new produtoObj();
        obj4.codigo=3;
        obj4.nome="Vestido";
        obj4.preco=89.99;
        obj4.foto="assets/vestido.png";
        this.listaProdutosCadastrados.push(obj4);
    
        let obj5= new produtoObj();
        obj5.codigo=4;
        obj5.nome="Colar";
        obj5.preco=169.99;
        obj5.foto="assets/colar.png";
        this.listaProdutosCadastrados.push(obj5);
  
        let obj6= new produtoObj();
        obj6.codigo=5;
        obj6.nome="Playstation 4";
        obj6.preco=1999.99;
        obj6.foto="assets/play4.png";
        this.listaProdutosEletronicosCadastrados.push(obj6);
  
        let obj7= new produtoObj();
        obj7.codigo=6;
        obj7.nome="Playstation 5";
        obj7.preco=2999.99;
        obj7.foto="assets/play5.png";
        this.listaProdutosEletronicosCadastrados.push(obj7);
  
        let obj8= new produtoObj();
        obj8.codigo=7;
        obj8.nome="Computador";
        obj8.preco=1499.99;
        obj8.foto="assets/computador.png";
        this.listaProdutosEletronicosCadastrados.push(obj8);
  
        let obj9= new produtoObj();
        obj9.codigo=8;
        obj9.nome="Notebook";
        obj9.preco=1599.99;
        obj9.foto="assets/notebook.png";
        this.listaProdutosEletronicosCadastrados.push(obj9);
  
        let obj10= new produtoObj();
        obj10.codigo=10;
        obj10.nome="Camera";
        obj10.preco=499.99;
        obj10.foto="assets/camera.png";
        this.listaProdutosEletronicosCadastrados.push(obj10);
      }
    loopCompraProdutos(){
        let i=0;
        while(i<this.qtdeProduto){
          this.objSelecionado.id= (meuCarrinho.length+1).toString();
          meuCarrinho.push({...this.objSelecionado});
          i++;
        }
        console.log(this.meuCarrinho)
      }
      selecionarCarrinho(list:produtoObj){
        this.qtdeProduto=0;
        this.objSelecionado = list;
      }
}



