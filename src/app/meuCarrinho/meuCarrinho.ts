import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CatalogoProdutoComponent } from "../catalogoProdutos/catalogoProduto";
import { finalizarCompra } from "../models/finalizarCompra.dto";
import { produtoObj } from "../models/produtoObj.dto";

@Component({
    selector: 'app-meuCarrinho',
    templateUrl: './meuCarrinho.html',
    styleUrls: ['./meuCarrinho.css']
})
export class MeuCarrinhoComponent{

    constructor(private router: Router){}
    colunasTabela =["Código", "Descrição", "Valor"];
    colunasTabelaComprasFinalizadas= ["Nome do Comprador","CPF Comprador","RG Comprador"];
    meuCarrinho:Array<produtoObj>=[];
    valorTotalPrecoCarrinho:number=0;
    mostrarValorPrecoCarrinhoDoisDigitos:string="";
    filtro:string="";

    objProdutoModalSelecionado:produtoObj= new produtoObj();
    objProdutoModal:produtoObj= new produtoObj();

    objFinalizarCompra:finalizarCompra=new finalizarCompra();


    comprasFinalizadas:Array<finalizarCompra>=[];
    compraFinalizadaSelecionada:finalizarCompra= new finalizarCompra();
    ngOnInit(){
        this.iniciarProdutos();
        this.somarValorCarrinho();
    }

    iniciarProdutos(){

        let obj= new produtoObj();        
        obj.codigo=0;
        obj.nome="Boné Masculino";
        obj.preco=19.99;
        obj.foto="assets/bone.png";
        this.meuCarrinho.push(obj);
        
        
        let obj2= new produtoObj();        
        obj2.codigo=1;
        obj2.nome="Camisa Masculina";
        obj2.preco=29.99;
        obj2.foto="assets/camisa.png";
        this.meuCarrinho.push(obj2);
    
        
        let obj3= new produtoObj();
        obj3.codigo=2;
        obj3.nome="Calça Masculino";
        obj3.preco=49.99;
        obj3.foto="assets/calca.png";
        this.meuCarrinho.push(obj3);
    
        let obj4= new produtoObj();
        obj4.codigo=3;
        obj4.nome="Vestido";
        obj4.preco=89.99;
        obj4.foto="assets/vestido.png";
        this.meuCarrinho.push(obj4);
    
        let obj5= new produtoObj();
        obj5.codigo=4;
        obj5.nome="Colar";
        obj5.preco=169.99;
        obj5.foto="assets/colar.png";
        this.meuCarrinho.push(obj5);

        let obj6= new produtoObj();
        obj6.codigo=5;
        obj6.nome="Playstation 4";
        obj6.preco=1999.99;
        obj6.foto="assets/play4.png";
        this.meuCarrinho.push(obj6);

        let obj7= new produtoObj();
        obj7.codigo=6;
        obj7.nome="Playstation 5";
        obj7.preco=2999.99;
        obj7.foto="assets/play5.png";
        this.meuCarrinho.push(obj7);

        let obj8= new produtoObj();
        obj8.codigo=7;
        obj8.nome="Computador";
        obj8.preco=1499.99;
        obj8.foto="assets/computador.png";
        this.meuCarrinho.push(obj8);

        let obj9= new produtoObj();
        obj9.codigo=8;
        obj9.nome="Notebook";
        obj9.preco=1599.99;
        obj9.foto="assets/notebook.png";
        this.meuCarrinho.push(obj9);

        let obj10= new produtoObj();
        obj10.codigo=9;
        obj10.nome="Camera";
        obj10.preco=499.99;
        obj10.foto="assets/camera.png";
        this.meuCarrinho.push(obj10);
    }

    filtrar(){
        console.log(this.filtro);
        let filtro =this.meuCarrinho.filter(items=>items.nome == this.filtro || items.codigo.toString() == this.filtro || items.preco.toString() == this.filtro);
        this.meuCarrinho = filtro;
    }

      receberProdutoAtual(list:produtoObj){
        this.objProdutoModal = {...list}; 
        this.objProdutoModalSelecionado = list;
      }

      editarCompra(list:produtoObj){         
        this.meuCarrinho.forEach((items,index)=>{
            if(items.codigo == list.codigo){
                this.meuCarrinho[index]=  this.objProdutoModal;
            }
        });
        
        this.somarValorCarrinho();
      }

      somarValorCarrinho(){
        this.valorTotalPrecoCarrinho = 0;      
        
        this.meuCarrinho.forEach(items=>{
            this.valorTotalPrecoCarrinho = this.valorTotalPrecoCarrinho + items.preco;
            this.mostrarValorPrecoCarrinhoDoisDigitos = this.valorTotalPrecoCarrinho.toFixed(2);
        });
      }

      finalizarCompraCarrinho(){
        this.comprasFinalizadas.push(this.objFinalizarCompra);
        this.objFinalizarCompra = new finalizarCompra();
        this.somarValorCarrinho();
        
        
        this.compraFinalizadaSelecionada.produtosComprados = this.meuCarrinho;
        console.log(this.compraFinalizadaSelecionada);
        
        this.meuCarrinho = [];
      }

      excluirCompra(list:produtoObj){
        this.meuCarrinho.forEach((items,index)=>{
            if(items.codigo == list.codigo){
                this.meuCarrinho.splice(index,1);
            }
        })
        this.somarValorCarrinho();
      }

      selecionarProdutosReferentCompra(list:finalizarCompra){          
        this.compraFinalizadaSelecionada.nomeComprador = list.nomeComprador;
        this.compraFinalizadaSelecionada.cpfComprador = list.cpfComprador;
        this.compraFinalizadaSelecionada.rgComprador = list.rgComprador;
      }
}