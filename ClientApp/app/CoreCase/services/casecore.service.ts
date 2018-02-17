import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ICase, Case } from "../models/case";

@Injectable()
export class CasecoreService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    getCloseDate(typeID: Number, startDate: Date): Observable<Date>
    {
        var params = new HttpParams();

        params = params.append('typeID', typeID.toString());
        params = params.append('startDate', startDate.toISOString());

        return this.http.get(this.baseUrl + 'api/OpenCase/GetCloseDate', { params: params })
            .do(closeDate => console.log('start date: ' + JSON.stringify(closeDate) + '** ' )).
            catch(this.handleError);

       
    }

    storeCase(cas: Case): Observable<Object> 
    {
      
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

        let value = JSON.stringify(cas);

        return this.http.post(this.baseUrl + 'api/OpenCase/CreateCase', value, { headers: headers }).do(response => console.log('Created case' + JSON.stringify(response)) ).catch(this.handleError);
    }

    getCases(): Observable<Case[]>
    {
        return this.http.get(this.baseUrl + 'api/OpenCase/GetCloseDate').do(cases => console.log('cases[]: ' + JSON.stringify(cases) + '** ')).
            catch(this.handleError);

    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}