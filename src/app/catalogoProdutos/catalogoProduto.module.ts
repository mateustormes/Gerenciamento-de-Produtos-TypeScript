import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CatalogoProdutoComponent } from "./catalogoProduto";
import { CatalogoProdutosRoutingModule } from "./catalogoProdutos-routing.module";

@NgModule({
    declarations: [CatalogoProdutoComponent],
    imports: [
      CommonModule,
      CatalogoProdutosRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class CatalogoProdutoModule { }