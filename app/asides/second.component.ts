import {Component} from "@angular/core";

@Component({
    template:`<StackLayout>
        <Label text="second"></Label>
        <Button nsRouterLink="/aside/first" text="go first"></Button>
    </StackLayout>`
})
export class SecondComponent{

}