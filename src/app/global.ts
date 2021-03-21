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
export let meuCarrinho:Array<produtoObj>=[];

export let listaProdutos:Array<produtoObj>= [];