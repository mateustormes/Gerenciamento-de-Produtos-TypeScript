import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'meuCarrinho',
    loadChildren: ()=>import('./meuCarrinho/meuCarrinho.module').then(m=>m.MeuCarrinhoModule)
  },
  {
    path:'catalogoProduto',
  loadChildren:()=>import('./catalogoProdutos/catalogoProduto.module').then(m=>m.CatalogoProdutoModule)
  },
  {
    path:'homePage',
    loadChildren:()=>import('./homePage/homePage.module').then(m=>m.HomePageModule)
  },
  {
    path:'desenvolvedor',
    loadChildren:()=>import('./desenvolvedor/desenvolvedor.module').then(m=>m.DesenvolvedorModule)
  },
  {
    path:'sobre',
    loadChildren:()=>import('./sobre/sobre.module').then(m=>m.SobreModule)
  },
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
