import { Injectable } from '@angular/core';
import { Headers, Http, Response, XHRBackend, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { WeightedScreenConfig } from './config/weighted-screen.config';
import { Node } from '../model/node.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeightedScreenService {

    actionUrl: string;

    headers: Headers;

    constructor(private config: WeightedScreenConfig, private http: Http) {
    }

    getNodesByViews(x: number): Observable<Array<Node>> {
        let serverWithApiUrl = this.config.server + this.config.apiUrl;
 
        return this.http.get(serverWithApiUrl)
            .map(
                (response: Response) => <Array<Node>>response.json()
            )
            .catch(this.handleError);
    }

    private handleError(error: Response): Observable<Node[]> {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}