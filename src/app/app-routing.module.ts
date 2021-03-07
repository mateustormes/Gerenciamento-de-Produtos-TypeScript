import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { produtoObj } from './models/produtoObj.dto';

const routes: Routes = [
  {
    path: '',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'meuCarrinho',
    loadChildren: ()=>import('./meuCarrinho/meuCarrinho.module').then(m=>m.MeuCarrinhoModule)
  },
  {
    path:'catalogoProduto',
  loadChildren:()=>import('./catalogoProdutos/catalogoProduto.module').then(m=>m.CatalogoProdutoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
