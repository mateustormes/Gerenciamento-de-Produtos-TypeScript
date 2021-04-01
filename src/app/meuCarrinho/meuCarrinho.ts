import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { finalizarCompra } from "../models/finalizarCompra.dto";
import { produtoObj } from "../models/produtoObj.dto";
import {globalVariables, listaProdutos, meuCarrinho, usuarioLogado, comprasFinalizadas,compraFinalizadaSelecionada} from "../global"
import { UsuarioDTO } from "../models/usuarios.dto";
@Component({
    selector: 'app-meuCarrinho',
    templateUrl: './meuCarrinho.html',
    styleUrls: ['./meuCarrinho.css']
})
export class MeuCarrinhoComponent{
  @Input() meuCarrinho: Array<produtoObj>= meuCarrinho;
  @Input() usuarioLogadoLocal: UsuarioDTO = {...usuarioLogado};
    constructor(private router: Router){}
    listaProdutos:Array<produtoObj>=listaProdutos;
    listaProdutosEletronicos:Array<produtoObj>=[];
    colunasTabela =["Id","Código", "Descrição", "Valor","Editar","Excluir"];
    meuCarrinhoLocal:Array<produtoObj> = meuCarrinho;
    comprasFinalizadasLocal:Array<finalizarCompra>= comprasFinalizadas;
    objSelecionado:produtoObj = new produtoObj();

    colunasTabelaComprasFinalizadas= ["Nome do Comprador","CPF Comprador","RG Comprador"];

    
    valorTotalPrecoCarrinho:number=0;
    qtdeProduto:number= 0;
    mostrarValorPrecoCarrinhoDoisDigitos:string="";
    filtro:string="";

    objProdutoModalSelecionado:produtoObj= new produtoObj();
    objProdutoModal:produtoObj= new produtoObj();

    objFinalizarCompra:finalizarCompra=new finalizarCompra();

    
    compraFinalizadaSelecionadaLocal:finalizarCompra= new finalizarCompra();
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
          if(items.nome.match(this.filtro) || items.codigo.toString().match(this.filtro) || items.id.toString().match(this.filtro)){
            filtro.push(items);
          }
        });
        this.meuCarrinhoLocal= filtro;
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
      }

      finalizarCompraCarrinho(){
        if(this.usuarioLogadoLocal.email!=""){
          this.objFinalizarCompra.cpfComprador =this.usuarioLogadoLocal.cpf;
          this.objFinalizarCompra.rgComprador =this.usuarioLogadoLocal.rg;
          this.objFinalizarCompra.nomeComprador =this.usuarioLogadoLocal.nomeCompleto;
        }
        this.meuCarrinhoLocal.forEach(items=>{
          this.objFinalizarCompra.produtosComprados.push(items)
        });
        
        this.comprasFinalizadasLocal.push(this.objFinalizarCompra);
        this.somarValorCarrinho();        
        this.mostrarValorPrecoCarrinhoDoisDigitos=  "";
        this.meuCarrinhoLocal = [];
        meuCarrinho.splice(0,meuCarrinho.length);
      }

      excluirCompra(list:produtoObj){
        this.meuCarrinhoLocal.forEach((items,index)=>{
            if(items.id == list.id){
              this.meuCarrinhoLocal.splice(index,1);
            }
        });
        this.somarValorCarrinho();
      }

      selecionarProdutosReferentCompra(list:finalizarCompra){  
        this.compraFinalizadaSelecionadaLocal.produtosComprados = list.produtosComprados;
        
        this.valorTotalPrecoCarrinho = 0;
        this.compraFinalizadaSelecionadaLocal.produtosComprados.forEach(items=>{
          this.valorTotalPrecoCarrinho =  Number(this.valorTotalPrecoCarrinho) + Number(items.preco);
        });
      this.compraFinalizadaSelecionadaLocal.totalCompraFinalizada = this.valorTotalPrecoCarrinho;
        this.compraFinalizadaSelecionadaLocal.nomeComprador = list.nomeComprador;
        this.compraFinalizadaSelecionadaLocal.cpfComprador = list.cpfComprador;
        this.compraFinalizadaSelecionadaLocal.rgComprador = list.rgComprador;        
      }
}