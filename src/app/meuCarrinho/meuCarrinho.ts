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
    meuCarrinhoLocal:Array<produtoObj> = [];
    @Input() usuarioLogadoLocal: UsuarioDTO = new UsuarioDTO();

    objSelecionado:produtoObj = new produtoObj();

    colunasTabela =["Id","Código", "Descrição", "Valor"];
    colunasTabelaComprasFinalizadas= ["Nome do Comprador","CPF Comprador","RG Comprador"];

    valorTotalPrecoCarrinho:number=0;
    mostrarValorPrecoCarrinhoDoisDigitos:string="";
    filtro:string="";
    qtdeProduto:number= 0;


    objProdutoModalSelecionado:produtoObj= new produtoObj();
    objProdutoModal:produtoObj= new produtoObj();

    objFinalizarCompra:finalizarCompra=new finalizarCompra();


    comprasFinalizadas:Array<finalizarCompra>=[];
    compraFinalizadaSelecionada:finalizarCompra= new finalizarCompra();
    ngOnInit(){
      console.log('meuCarrinho');
      
      console.log(this.meuCarrinho);
      console.log(meuCarrinho);
      
      
      this.iniciarProdutosCatalogo();
        this.somarValorCarrinho();
    }

    iniciarProdutosCatalogo(){
      let obj= new produtoObj();
      obj.codigo=0;
      obj.nome="Boné Masculino";
      obj.preco=19.99;
      obj.foto="assets/bone.png";
      this.listaProdutos.push(obj);
      
      
      let obj2= new produtoObj();
      obj2.codigo=1;
      obj2.nome="Camisa Masculina";
      obj2.preco=29.99;
      obj2.foto="assets/camisa.png";
      this.listaProdutos.push(obj2);
  
      
      let obj3= new produtoObj();
      obj3.codigo=2;
      obj3.nome="Calça Masculino";
      obj3.preco=49.99;
      obj3.foto="assets/calca.png";
      this.listaProdutos.push(obj3);
  
      let obj4= new produtoObj();
      obj4.codigo=3;
      obj4.nome="Vestido";
      obj4.preco=89.99;
      obj4.foto="assets/vestido.png";
      this.listaProdutos.push(obj4);
  
      let obj5= new produtoObj();
      obj5.codigo=4;
      obj5.nome="Colar";
      obj5.preco=169.99;
      obj5.foto="assets/colar.png";
      this.listaProdutos.push(obj5);

      let obj6= new produtoObj();
      obj6.codigo=5;
      obj6.nome="Playstation 4";
      obj6.preco=1999.99;
      obj6.foto="assets/play4.png";
      this.listaProdutosEletronicos.push(obj6);

      let obj7= new produtoObj();
      obj7.codigo=6;
      obj7.nome="Playstation 5";
      obj7.preco=2999.99;
      obj7.foto="assets/play5.png";
      this.listaProdutosEletronicos.push(obj7);

      let obj8= new produtoObj();
      obj8.codigo=7;
      obj8.nome="Computador";
      obj8.preco=1499.99;
      obj8.foto="assets/computador.png";
      this.listaProdutosEletronicos.push(obj8);

      let obj9= new produtoObj();
      obj9.codigo=8;
      obj9.nome="Notebook";
      obj9.preco=1599.99;
      obj9.foto="assets/notebook.png";
      this.listaProdutosEletronicos.push(obj9);

      let obj10= new produtoObj();
      obj10.codigo=10;
      obj10.nome="Camera";
      obj10.preco=499.99;
      obj10.foto="assets/camera.png";
      this.listaProdutosEletronicos.push(obj10);
    }

    loopCompraProdutos(){
      let i=0;
      while(i<this.qtdeProduto){
        this.objSelecionado.id= i.toString();
        meuCarrinho.push(this.objSelecionado);
        i++;
      }
      this.somarValorCarrinho();
    }

    filtrar(){
      let filtro:Array<produtoObj>=[];
      
      if(this.filtro!=""){
        meuCarrinho.forEach(items=>{
          if(items.nome.match(this.filtro)){
            filtro.push(items);
          }
        });
        this.meuCarrinhoAux= meuCarrinho;
        //meuCarrinho = filtro;
      }else{
        console.log(this.meuCarrinhoAux);
        
        //meuCarrinho=this.meuCarrinhoAux;
      }
        this.somarValorCarrinho();
    }

    selecionarCarrinho(list:produtoObj){
      this.qtdeProduto=0;
      this.objSelecionado = list;
      console.log(this.objSelecionado);
      
    }

      receberProdutoAtual(list:produtoObj){
        this.objProdutoModal = {...list}; 
        this.objProdutoModalSelecionado = list;
      }

      editarCompra(list:produtoObj){         
        meuCarrinho.forEach((items,index)=>{
            if(items.codigo == list.codigo){
                meuCarrinho[index]=  this.objProdutoModal;
            }
        });
        
        this.somarValorCarrinho();
      }

      somarValorCarrinho(){
        this.valorTotalPrecoCarrinho = 0;      
        
        meuCarrinho.forEach(items=>{
            this.valorTotalPrecoCarrinho = this.valorTotalPrecoCarrinho + items.preco;
            this.mostrarValorPrecoCarrinhoDoisDigitos = this.valorTotalPrecoCarrinho.toFixed(2);
        });
        this.compraFinalizadaSelecionada.totalCompraFinalizada = this.valorTotalPrecoCarrinho;
      }

      finalizarCompraCarrinho(){
        this.objFinalizarCompra.produtosComprados = meuCarrinho;
        this.comprasFinalizadas.push(this.objFinalizarCompra);
        
        this.objFinalizarCompra = new finalizarCompra();
        this.somarValorCarrinho();        
        //meuCarrinho = [];
      }

      excluirCompra(list:produtoObj){
        meuCarrinho.forEach((items,index)=>{
            if(items.codigo == list.codigo){
                meuCarrinho.splice(index,1);
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