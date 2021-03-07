import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuCarrinhoRoutingModule } from './meuCarrinho-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeuCarrinhoComponent } from './meuCarrinho';


@NgModule({
  declarations: [MeuCarrinhoComponent],
  imports: [
    CommonModule,
    MeuCarrinhoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeuCarrinhoModule { }
