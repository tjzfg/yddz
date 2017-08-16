import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {NgCarouselModule} from "nativescript-carouselNg"
import {IndexComponent} from "./index/index.component";
import {ServiceModule} from "df_ng_mall_services/service.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {MallCommonModule} from "./commons/mall.common.module";
import {DFTnsCommonModule} from "df-tns-ng-instruments"
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NgCarouselModule,
        AppRoutingModule,
        MallCommonModule,
        ServiceModule.forRoot("http://47.93.39.3")
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        IndexComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
