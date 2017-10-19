import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms'
import { AddEntityService } from './add.entity.service'
import { IEntity, Entity } from "./entity";

@Component({
    selector: 'app-add-entity',
    templateUrl: './add.entity.component.html',
    styleUrls: ['./add.entity.component.css']
})
/** addEntity component*/
export class AddEntityComponent implements OnInit
{

    addEntityForm: FormGroup;

    selectedValue: string;

    entityTypes = [
        { value: '1', viewValue: 'Employee' },
        { value: '2', viewValue: 'Client' },
        { value: '3', viewValue: 'Others' }
    ];

    /** notification ctor */
    constructor(private fb: FormBuilder,
        private _addEntityService: AddEntityService,
        public route: ActivatedRoute,
        public router: Router ) {

        this.addEntityForm = fb.group({
            'email': ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
            'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'validate': '',
            'dsg': '',
            'it': '',
            'ags': '',
            'occurrence': '',
            'surname': ['', Validators.required],
            'UniqueId': '',
            'type': '',
            'selectedValue': '',
            'adddress': '',
            'adddress2': '',
            'city': '',
            'country': '',
            'postalCode':'',
        });
    }

    /** Called by Angular after addEntity component initialized */
    ngOnInit(): void { }

    public postAddEntity(post: any): void {

        let entity = new Entity();
        entity.name = post.name;
        entity.email = post.email;
        entity.surname = post.surname;

        this._addEntityService.storeEntity(entity);

        this.router.navigate(['app-listentity']);

    }

    public cancelBack(): void {

        this.router.navigate(['app-listentity']);
    }
}