import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
/** notification component*/
export class NotificationComponent implements OnInit
{
    rForm: FormGroup;
    post: any;                     // A property for our submitted form
    email: string = '';
    name: string = '';
    public users: User[];

    /** notification ctor */
    constructor(private fb: FormBuilder) {
        
        this.rForm = fb.group({
            'email': ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
            'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'validate': '',
            'dsg': '',
            'it': '',
            'ags': '',
            'occurrence': '',
        });
    }

    /** Called by Angular after notification component initialized */
    ngOnInit(): void {
        var test = new User();
        test.name = "test"
        test.email = "fdsfsd@gmail.com";
        test.AGS = true;
        test.DSG = false;
        test.IT = true;
        test.occurrence = 'weekly';
        this.users = [];
        this.users.push(test);
    }

    public addPost(post: any): void {
        this.email = post.email;
        this.name = post.name;
       
        var u = new User();
        u.name = name;
        u.AGS = post.AGS;
        u.DSG = post.DSG;
        u.IT = post.IT;
        u.email = this.email;
        
        this.users.push(u);
        this.rForm.reset();
    }

    public addUser(): void
    {
        this.name = '';
    }

}

interface IUser
{
    email: string;
    name: string;
    DSG: boolean;
    IT: boolean;
    AGS: boolean;
    occurrence: string;
}

export class User implements IUser {
    public email: string;
    public name: string;
    public DSG: boolean;
    public IT: boolean;
    public AGS: boolean;
    public occurrence: string;
}