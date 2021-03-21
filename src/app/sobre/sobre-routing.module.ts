import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SobreComponent } from "./sobre";

export const SobreRoutes:Routes= [
    {
      path:"",
      component:SobreComponent,
    },
    {
      path:"/",
      component:SobreComponent
    },
    {
      path:'/sobre',
      component:SobreComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(SobreRoutes)],
    exports: [RouterModule]
  })
  export class SobreRoutingModule{
  }