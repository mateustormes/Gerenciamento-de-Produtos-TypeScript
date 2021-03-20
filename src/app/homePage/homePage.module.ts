import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePageComponent } from "./homePage";
import { homePageRoutingModule } from "./homePage-routing.module";

@NgModule({
    declarations: [HomePageComponent],
    imports: [
      CommonModule,
      homePageRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class HomePageModule { }