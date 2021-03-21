import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SobreComponent } from "./sobre";
import { SobreRoutingModule } from "./sobre-routing.module";

@NgModule({
    declarations: [SobreComponent],
    imports: [
      CommonModule,
      SobreRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: []
  })
  export class SobreModule { }