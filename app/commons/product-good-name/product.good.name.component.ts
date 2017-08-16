import {Component, Input} from "@angular/core";
@Component({
    selector:"product-good-name",
    template:`
        <Label text="{{product.good.goodName}}">
            <FormattedString>
                <Span text="商品" backgroundColor="red"  color="#fff" fontAttributes="Bold"></Span>
                <Span text=" "></Span>
                <Span text="{{product.good.goodName}}"></Span>
            </FormattedString>
        </Label>
    `,
    styles:[`
        product-good-name{
            line-height:15;
            padding:2;
        }
    `]
})
export class ProductGoodNameComponent{
    @Input() product;
}