import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { finalizarCompra } from "../models/finalizarCompra.dto";
import { produtoObj } from "../models/produtoObj.dto";
import {globalVariables, listaProdutos, meuCarrinho} from "../global"
import { UsuarioDTO } from "../models/usuarios.dto";
@Component({
    selector: 'app-meuCarrinho',
    templateUrl: './meuCarrinho.html',
    styleUrls: ['./meuCarrinho.css']
})
export class MeuCarrinhoComponent{
  @Input() meuCarrinho: Array<produtoObj>= meuCarrinho;
  
    constructor(private router: Router){}
    listaProdutos:Array<produtoObj>=listaProdutos;
    listaProdutosEletronicos:Array<produtoObj>=[];
    meuCarrinhoAux:Array<produtoObj>=[];
    meuCarrinhoLocal:Array<produtoObj> = meuCarrinho;
    @Input() usuarioLogadoLocal: UsuarioDTO = new UsuarioDTO();

    objSelecionado:produtoObj = new produtoObj();

    colunasTabela =["Id","Código", "Descrição", "Valor"];
    colunasTabelaComprasFinalizadas= ["Nome do Comprador","CPF Comprador","RG Comprador"];

    valorTotalPrecoCarrinho:number=0;
    mostrarValorPrecoCarrinhoDoisDigitos:string="";    filtro:string="";
    qtdeProduto:number= 0;


    objProdutoModalSelecionado:produtoObj= new produtoObj();
    objProdutoModal:produtoObj= new produtoObj();

    objFinalizarCompra:finalizarCompra=new finalizarCompra();


    comprasFinalizadas:Array<finalizarCompra>=[];
    compraFinalizadaSelecionada:finalizarCompra= new finalizarCompra();
    ngOnInit(){
      this.somarValorCarrinho();
    }


    loopCompraProdutos(){
      let i=0;
      while(i<this.qtdeProduto){
        this.objSelecionado.id= i.toString();
        this.meuCarrinhoLocal.push(this.objSelecionado);
        i++;
      }
      this.somarValorCarrinho();
    }

    filtrar(){
      let filtro:Array<produtoObj>=[];
      
      if(this.filtro!=""){
        this.meuCarrinhoLocal.forEach(items=>{
          if(items.nome.match(this.filtro)){
            filtro.push(items);
          }
        });
        this.meuCarrinhoAux= this.meuCarrinhoLocal;
        //meuCarrinho = filtro;
      }else{        
        //meuCarrinho=this.meuCarrinhoAux;
      }
        this.somarValorCarrinho();
    }

    selecionarCarrinho(list:produtoObj){
      this.qtdeProduto=0;
      this.objSelecionado = list;      
    }

      receberProdutoAtual(list:produtoObj){
        this.objProdutoModal = {...list}; 
        this.objProdutoModalSelecionado = list;
      }

      editarCompra(list:produtoObj){         
        this.meuCarrinhoLocal.forEach((items,index)=>{
            if(items.id == list.id){
              this.meuCarrinhoLocal[index]=  this.objProdutoModal;
            }
        });
        
        this.somarValorCarrinho();
      }

      somarValorCarrinho(){
        this.valorTotalPrecoCarrinho = 0;
            
        this.meuCarrinhoLocal.forEach(items=>{
            this.valorTotalPrecoCarrinho =  Number(this.valorTotalPrecoCarrinho) + Number(items.preco);
            this.mostrarValorPrecoCarrinhoDoisDigitos = this.valorTotalPrecoCarrinho.toFixed(2);
          });
        this.compraFinalizadaSelecionada.totalCompraFinalizada = this.valorTotalPrecoCarrinho;
      }

      finalizarCompraCarrinho(){
        this.objFinalizarCompra.produtosComprados = this.meuCarrinhoLocal;
        this.comprasFinalizadas.push(this.objFinalizarCompra);
        
        this.objFinalizarCompra = new finalizarCompra();
        this.somarValorCarrinho();        
        this.meuCarrinhoLocal = [];
      }

      excluirCompra(list:produtoObj){
        this.meuCarrinhoLocal.forEach((items,index)=>{
            if(items.id == list.id){
              this.meuCarrinhoLocal.splice(index,1);
            }
        })
        this.somarValorCarrinho();
      }

      selecionarProdutosReferentCompra(list:finalizarCompra){                  
        this.compraFinalizadaSelecionada.nomeComprador = list.nomeComprador;
        this.compraFinalizadaSelecionada.cpfComprador = list.cpfComprador;
        this.compraFinalizadaSelecionada.rgComprador = list.rgComprador;
        this.compraFinalizadaSelecionada.produtosComprados = list.produtosComprados;
      }
}