import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuCarrinhoComponent } from './meuCarrinho';


export const meuCarrinhoRoutes:Routes= [
  {
    path:"",
    component:MeuCarrinhoComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(meuCarrinhoRoutes)],
  exports: [RouterModule]
})
export class MeuCarrinhoRoutingModule{
}