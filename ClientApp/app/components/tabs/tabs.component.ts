import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
/** tabs component*/
export class TabsComponent implements OnInit
{
    /** tabs ctor */
    constructor() { }

    /** Called by Angular after tabs component initialized */
    ngOnInit(): void { }
}