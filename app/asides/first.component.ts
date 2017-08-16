import {Component} from "@angular/core";

@Component({
    template:`<StackLayout>
        <Label text="first"></Label>
        <Button nsRouterLink="/aside/second" text="go second"></Button>
    </StackLayout>`
})
export class FirstComponent{

}