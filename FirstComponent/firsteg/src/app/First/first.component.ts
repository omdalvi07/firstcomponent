import { Component } from "@angular/core";

@Component({
    selector : "first",
    templateUrl : "./first.component.html"
})
export class firstComponent
{
    public sub_one : string
    public sub_two : string
    public sub_three : string

    constructor()
    {
        this.sub_one = "OM"
        this.sub_two = "DALVI"
        this.sub_three = "ETC"
    }

}
