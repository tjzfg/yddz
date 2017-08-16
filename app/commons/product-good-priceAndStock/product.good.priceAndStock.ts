import {Component, Input} from "@angular/core";

@Component({
    selector:"product-good-priceAndStock",
    template:`
        <WrapLayout>
            <StackLayout class="col-2-odd">
                <Label text="{{'价格:'+product.good.withSpecifications[0].salePrice}}"></Label>
            </StackLayout>
            <StackLayout class="col-2-even">
                <Label textAlignment="right" text="{{'库存:'+product.stocks[0].rest}}"></Label>
            </StackLayout>
        </WrapLayout>
    `
})
export class ProductGoodPriceAndStockComponent{

    @Input() product;
}