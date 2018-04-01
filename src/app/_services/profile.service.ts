import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {

    constructor(private http: Http) { }

    getLocation(zip: string) {
        // const headers = new Headers({'Content-type': 'application/json'})
        // const options = new RequestOptions({headers: headers})
        // return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + 
        // '&key=AIzaSyAJAEPBxPzgNQxBzPX_wIKtqhdUjYo2JLY').map((response: Response) => {
        //     console.log(response.json())
        //     // const zipInfo = response.json()
        //     return response.json()
        // })
        return this.http.get('http://api.zippopotam.us/us/' + zip).map((response: Response) => {
            return response.json()
        }).catch((error) => {
            console.log(error)
            return Observable.of(false);
        })
    }
}