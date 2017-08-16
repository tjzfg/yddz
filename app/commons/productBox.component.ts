import {ChangeDetectionStrategy, Component, Input, ViewChild} from "@angular/core";
import {Page} from "ui/page";

import {RouterExtensions} from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "product-box",
    templateUrl: "productBox.component.html",
    styleUrls: ["productBox.component.css"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductBoxComponent {
    constructor(private page: Page,
                //private productService: ProductService,
                private routerExtensions: RouterExtensions) {
        //this.config = globalConfig;
    }

    @Input() stocksList ;//请求回的商品库存信息
    /*floor = function (data) {
        return Math.floor(data / 2);
    };
    public config;
    public settlement;
    @ViewChild('imageGrid') imageGrid;

    //从页面遍历的当前产品传回来的product参数
    jumpProduct(product) {
        //将当前点击的产品注入回productService服务的变量currentProduct中去
        this.productService.currentProductId = product.good.id;
        this.routerExtensions.navigateByUrl("product");
    }

    user: User = globalConfig.user;

    getUser(lev, users) {
        let user: User = this.user.sponsor;
        if (lev < 0) {
            while (users.sponsor != null) {
                user = users.sponsor;
            }
        } else if (lev > 0) {
            user = this.getUser(lev--, user)
        }
        return user;
    }
    itemTrackBy(index,item){
        return item.id;
    }*/
}


