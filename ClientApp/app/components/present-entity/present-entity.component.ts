import { Component, OnInit } from '@angular/core';
import { AddEntityService } from "../add-entity/add.entity.service"
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Entity, IEntity } from "../add-entity/entity";

@Component({
    selector: 'app-present-entity',
    templateUrl: './present-entity.component.html',
    styleUrls: ['./present-entity.component.css']
})
/** present-entity component*/
export class PresentEntityComponent {

    public enity: IEntity;
    /** present-entity ctor */
    constructor(public addEntityService: AddEntityService, public router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
       var  sub = this.route.params.subscribe(params => {
           var id = +params['entityId']; // (+) converts string 'id' to a number
             this.addEntityService.getEntity(id).subscribe(ent => this.enity = ent as IEntity);
        });
    }
}