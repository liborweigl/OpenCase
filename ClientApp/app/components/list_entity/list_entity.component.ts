import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Entity, IEntity } from "../add-entity/entity";
import { AddEntityService } from "../add-entity/add.entity.service"
import { Router } from '@angular/router';

@Component({
    selector: 'app-list_entity',
    templateUrl: './list_entity.component.html',
    styleUrls: ['./list_entity.component.css']
})
/** list_entity component*/
export class List_entityComponent implements OnInit
{
    displayedColumns = ['name', 'surname', 'email'];
    dataSource: ExampleDataSource; 
    entity: IEntity[];

    /** list_entity ctor */
    constructor(private addEntityService: AddEntityService, public router: Router) {
       
        addEntityService.getEntities().subscribe(data => {
            this.entity = <IEntity[]>data;
            this.dataSource = new ExampleDataSource(this.entity);
        });
      
    }

    /** Called by Angular after list_entity component initialized */
    ngOnInit(): void { }

    addRow(): void
    {
        this.entity.push(<IEntity>{ name: 'fdsfds', surname: 'dd', email: 'emafdsil@gmail.com' });
        this.dataSource = new ExampleDataSource(this.entity);
    }

    selectRow(row: any): void
    {
        console.log(row);
        this.router.navigate(['app-presententity', { entityId: row.id }]);

    }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */

    constructor(private entity: IEntity[])
    {
        super();
    }

    connect(): Observable<Entity[]> {
        return Observable.of(this.entity);
    }

    disconnect() { }
}
