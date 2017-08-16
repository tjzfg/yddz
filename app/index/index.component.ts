import {Component} from "@angular/core";
import {AnnService} from "df_ng_mall_services/announcements.service"
import {StocksService} from "df_ng_mall_services/stocks.service";
import {map} from "rxjs/operator/map";
import {Page} from "ui/page";
import {Frame} from "ui/frame";
@Component({
    moduleId: module.id,
    templateUrl:"./index.component.html"
})
export class IndexComponent{
    constructor(annouces:AnnService,stocks:StocksService,private frame:Frame){

        /*this.announceList=annouces.getAnnouncements(0).map((anns:any)=>{
            console.log(anns);
            let  images:String[]=[];
            for(let ann of anns){
                images.push(ann.picUrl);
            }
            return images;
        })*/
        this.productList=stocks.getAllStocks(1,50);
    }
    ngAfterViewInit(){
        if(this.frame.android){
            this.frame.android.cachePagesOnNavigate=true;
        }
    }
    productList;
    announceList=new Promise((resolve,reject)=>{
       setTimeout(()=>resolve(["announcement/a758a8df-2efd-4db5-a68f-c654fa06a34d.jpg",
           "announcement/5d74de5d-8b23-49d1-8578-c17554f2e748.jpg",
           "announcement/b173e106-5841-4089-ba43-e61b9bcf40d8.jpg"]),5000)
    });
}