import { Component, OnInit} from '@angular/core';
import { CasecoreService } from '../../services/casecore.service';
import { Case, ICase } from '../../models/case';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Router, ActivatedRoute } from '@angular/router';


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
    createDate: FormControl;
    closeDate: FormControl;

    isLinear = false;

    entityTypes = [
        { value: '1', viewValue: 'Employee' },
        { value: '2', viewValue: 'Client' },
        { value: '3', viewValue: 'Others' }
    ];

    /** addform ctor */
    constructor(private coreservice: CasecoreService,
                private _formBuilder: FormBuilder,
                private router: Router) {

       
    }

    ngOnInit() {
        this.case = new Case();
        this.case.caseId = 0;
        this.case.caseTypeId = 0;
        this.case.logDate = new Date();

        ///date = new FormControl(new Date());
        this.createDate = new FormControl((new Date()).toISOString());
        this.closeDate = new FormControl((new Date()).toISOString());
        this.firstFormGroup = this._formBuilder.group({
            title: new FormControl('', [Validators.required])
        });

        this.secondFormGroup = this._formBuilder.group({
            title: new FormControl('', [Validators.required]),
            selectedValue: new FormControl('', [Validators.required])
        });

    
        
    }

    calculateCloseDate(type: string, event: MatDatepickerInputEvent<Date>) {
        this.coreservice.getCloseDate(2, event.value != null ? event.value : new Date()).subscribe(
            closeDate => {
                this.closeDate = new FormControl(closeDate)
                this.case.closeDate = closeDate;
            }
            );

        //this.closeDate = new FormControl((event.value != null ? event.value : new Date()).toISOString());
    }

    getErrorMessage()
    {
        return "";
    }

    closeStepper(event : any): void
    {
        this.coreservice.storeCase(this.case).subscribe(x => {
            this.router.navigate(['corecase']);
        })
       
       
    }

   
}