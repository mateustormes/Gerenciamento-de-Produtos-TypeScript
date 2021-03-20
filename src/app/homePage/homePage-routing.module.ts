import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./homePage";

export const homePageRoutes:Routes= [
    {
      path:"",
      component:HomePageComponent,
    },
    {
      path:"/",
      component:HomePageComponent
    },
    {
      path:'/homePage',
      component:HomePageComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(homePageRoutes)],
    exports: [RouterModule]
  })
  export class homePageRoutingModule{
  }