import { Component, OnInit } from '@angular/core';
import { Case, ICase } from '../../models/case';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
/** main component*/
export class MainComponent implements OnInit {
    /** main ctor */


    firstFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {

    }


    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
    }
}