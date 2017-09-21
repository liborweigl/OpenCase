import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-inputdata',
    templateUrl: './inputdata.component.html',
    styleUrls: ['./inputdata.component.css']
})
/** inputdata component*/
export class InputdataComponent implements OnInit
{
    myForm: FormGroup;

    /** inputdata ctor */
    constructor(private fb: FormBuilder) { }

    /** Called by Angular after inputdata component initialized */
    ngOnInit(): void {
        //this.myForm = new FormGroup({
        //    name: new FormControl('Benedict'),
        //    email: new FormControl(''),
        //    message: new FormControl('')
        //});
        this.myForm = this.fb.group({
            name: ['Benedict', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
            message: ['', [Validators.required, Validators.minLength(15)]]
        });
    }

    onSubmit(form: FormGroup) {
        console.log('Valid?', form.valid); // true or false
        console.log('Name', form.value.name);
        console.log('Email', form.value.email);
        console.log('Message', form.value.message);
    }
}