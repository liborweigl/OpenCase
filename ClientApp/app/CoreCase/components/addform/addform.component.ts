import { Component, OnInit} from '@angular/core';
import { CasecoreService } from '../../services/casecore.service';
import { Case, ICase } from '../../models/case';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";



@Component({
    selector: 'case-addform',
    templateUrl: './addform.component.html',
    styleUrls: ['./addform.component.scss']
})
/** addform component*/
export class AddformComponent implements OnInit {
    case: ICase;
    //title: FormControl;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isLinear = false;

    entityTypes = [
        { value: '1', viewValue: 'Employee' },
        { value: '2', viewValue: 'Client' },
        { value: '3', viewValue: 'Others' }
    ];

    /** addform ctor */
    constructor(coreservice: CasecoreService, private _formBuilder: FormBuilder) {

       
    }

    ngOnInit() {
        this.case = new Case();
        //this.title = new FormControl('', [Validators.required]);
        //this.firstFormGroup.addControl('title', this.title);
        //this.firstFormGroup = this._formBuilder.group({
        //    title: ['', Validators.required]
        //});
        this.firstFormGroup = this._formBuilder.group({
            title: new FormControl('', [Validators.required])
        });

        this.secondFormGroup = this._formBuilder.group({
            title: new FormControl('', [Validators.required]),
            selectedValue: new FormControl('', [Validators.required])
        });
    }

    getErrorMessage()
    {
        return "xxx";
    }

   
}