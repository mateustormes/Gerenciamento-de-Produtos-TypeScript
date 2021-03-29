import { finalizarCompra } from "./models/finalizarCompra.dto";
import { produtoObj } from "./models/produtoObj.dto";
import { UsuarioDTO } from "./models/usuarios.dto";

export let globalVariables: UsuarioDTO = new UsuarioDTO();
export let usuarioCadastro: UsuarioDTO = new UsuarioDTO();
export let usuarioLogado: UsuarioDTO = new UsuarioDTO();
export let listaUsuariosCadastrados:Array<UsuarioDTO>= [];
export let listaProdutosCadastrados:Array<produtoObj>= [];
export let listaProdutosEletronicosCadastrados:Array<produtoObj>= [];
export let qtdeProduto: number;
export let objSelecionado:produtoObj = new produtoObj();
export let objProdutoModal:produtoObj = new produtoObj();
export let compraFinalizadaSelecionada:finalizarCompra= new finalizarCompra();
export let meuCarrinho:Array<produtoObj>=[];
export let comprasFinalizadas:Array<finalizarCompra>=[];
export let listaProdutos:Array<produtoObj>= [];