import { Injectable, Inject  } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


import { IEntity, Entity } from './entity';

@Injectable()
export class AddEntityService {
    //private _productUrl = './api/products/products.json';
     entity: IEntity[];
    

     constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.entity = result as IEntity[];
        }, error => console.error(error));
    }

    getProducts(): Observable<IEntity[]> {
        return this.http.get<IEntity[]>(this.baseUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

    storeEntity(entity: IEntity): void {
       
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
        
        let value = JSON.stringify(entity);
        this.http.post(this.baseUrl + 'api/OpenCase/CreateNewEntity', value, { headers: headers }
        ).subscribe();
    }


    getEntities(): Observable<IEntity[]> {
        
        let b: Observable<IEntity[]> = this.http.get(this.baseUrl + 'api/OpenCase/GetEntities')
            .do(data => console.log('All: ' + JSON.stringify(data as IEntity[]) + 'next ' + (data as IEntity[]))).
            catch(this.handleError);
        
        console.log('Not in observable:');
        return b;
    }
}
