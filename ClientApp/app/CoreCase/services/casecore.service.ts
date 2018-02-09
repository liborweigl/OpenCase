import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

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

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}