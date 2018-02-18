import { Component, OnInit } from '@angular/core';
import { Case, ICase } from '../../models/case';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from '@angular/material';
import { CasecoreService } from "../../services/casecore.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
/** main component*/
export class MainComponent implements OnInit {
    /** main ctor */


    firstFormGroup: FormGroup;
    displayedColumns = ['caseId', 'title', 'note', 'caseTypeId', 'createDate', 'closeDate'];
    dataSource: MatTableDataSource<Case>;

    constructor(private _formBuilder: FormBuilder, private caseService: CasecoreService) {
     
       

    }


    ngOnInit() {

        this.caseService.getCases().subscribe(cases => {

            this.dataSource = new MatTableDataSource(cases);
        })
        
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}