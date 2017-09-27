import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-userform',
    templateUrl: './userform.component.html',
    styleUrls: ['./userform.component.css']
})
/** userform component*/
export class UserformComponent implements OnInit
{
    rForm: FormGroup;
    post: any;                     // A property for our submitted form
    description: string = '';
    name: string = '';

    constructor(private fb: FormBuilder) {

        this.rForm = fb.group({
            'name': [null, Validators.required],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
            'validate': ''
        });
    }
    /** Called by Angular after userform component initialized */
    ngOnInit(): void { }

    public addPost(post: any): void {
        this.description = post.description;
        this.name = post.name;
    }
}