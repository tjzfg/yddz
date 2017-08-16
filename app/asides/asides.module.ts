import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular";
import {Routes} from "@angular/router";
import {FirstComponent} from "./first.component";
import {SecondComponent} from "./second.component";

let routes:Routes=[
    {path:"first",component:FirstComponent},
    {path:"second",component:SecondComponent}
];
@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations:[FirstComponent,SecondComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AsidesModule{

}