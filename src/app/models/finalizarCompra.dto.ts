import { produtoObj } from "./produtoObj.dto";

export class finalizarCompra {
    produtosComprados: Array<produtoObj>= [];
    nomeComprador:string='';
    cpfComprador:string='';
    rgComprador:string='';
    totalCompraFinalizada:number=0;
  };