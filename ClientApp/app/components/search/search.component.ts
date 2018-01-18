import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
/** search component*/
export class SearchComponent {
    Products: Array<any>;
    /** search ctor */
    constructor() {

    }


    search($event: any) : void
    {

    }
}