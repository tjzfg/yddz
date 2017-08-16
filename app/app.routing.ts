import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {IndexComponent} from "./index/index.component";

export const routes: Routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    {path:"index",component:IndexComponent},
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    {path:"aside",loadChildren:"./asides/asides.module#AsidesModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }