import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DesenvolvedorComponent } from "./desenvolvedor";

export const DesenvolvedorRoutes:Routes= [
    {
      path:"",
      component:DesenvolvedorComponent,
    },
    {
      path:"/",
      component:DesenvolvedorComponent
    },
    {
      path:'/desenvolvedor',
      component:DesenvolvedorComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(DesenvolvedorRoutes)],
    exports: [RouterModule]
  })
  export class DesenvolvedorRoutingModule{
  }