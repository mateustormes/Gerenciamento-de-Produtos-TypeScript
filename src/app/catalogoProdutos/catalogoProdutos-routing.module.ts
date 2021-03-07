import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoProdutoComponent } from "./catalogoProduto";

export const catalogoProdutosRoutes:Routes= [
    {
      path:"",
      component:CatalogoProdutoComponent,
    },
    {
      path:"/",
      component:CatalogoProdutoComponent
    },
    {
      path:'/catalogoProduto',
      component:CatalogoProdutoComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(catalogoProdutosRoutes)],
    exports: [RouterModule]
  })
  export class CatalogoProdutosRoutingModule{
  }