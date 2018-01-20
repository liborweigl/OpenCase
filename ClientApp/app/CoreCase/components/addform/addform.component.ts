import { Component, OnInit} from '@angular/core';
import { CasecoreService } from '../../services/casecore.service';
import { Case, ICase } from '../../models/case';
import { FormControl, Validators } from "@angular/forms";



@Component({
    selector: 'case-addform',
    templateUrl: './addform.component.html',
    styleUrls: ['./addform.component.scss']
})
/** addform component*/
export class AddformComponent implements OnInit {
    case: ICase;
    title: FormControl;
    /** addform ctor */
    constructor(coreservice : CasecoreService) {

       
    }

    ngOnInit() {
        this.case = new Case();
        this.title = new FormControl('', [Validators.required]);
    }

    getErrorMessage()
    {
        return "xxx";
    }

   
}