import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
      CommonModule,
      LoginRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: []
  })
  export class LoginModule { }