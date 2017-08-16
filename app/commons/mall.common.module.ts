import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {ProductBoxComponent} from "./productBox.component";
import {ProductGoodNameComponent} from "./product-good-name/product.good.name.component";
import {ProductGoodPriceAndStockComponent} from "./product-good-priceAndStock/product.good.priceAndStock";
import {DFTnsCommonModule} from "df-tns-ng-instruments"
@NgModule({
    imports: [
        NativeScriptModule,
        DFTnsCommonModule
    ],
    declarations: [
        ProductBoxComponent,ProductGoodNameComponent,ProductGoodPriceAndStockComponent
    ],
    exports:[
        ProductBoxComponent,DFTnsCommonModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MallCommonModule{

}