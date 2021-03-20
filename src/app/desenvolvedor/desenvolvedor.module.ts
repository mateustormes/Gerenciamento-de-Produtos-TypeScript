import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DesenvolvedorComponent } from "./desenvolvedor";
import { DesenvolvedorRoutingModule } from "./desenvolvedor-routing.module";

@NgModule({
    declarations: [DesenvolvedorComponent],
    imports: [
      CommonModule,
      DesenvolvedorRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class DesenvolvedorModule { }