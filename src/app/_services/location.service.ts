import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService {

    constructor(private http: Http) { }

    getLocations() {
        return this.http.get('http://localhost:5000/api/location').map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    addLocation(location: any) {
        return this.http.post('http://localhost:5000/api/location', location).map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    getLocationFromCity(cityAndState: any) {
        console.log(cityAndState)
        return this.http.get('http://api.zippopotam.us/us/' + cityAndState.state + '/' + cityAndState.city)
        // return this.http.get('http://api.zippopotam.us/us/mn/minneapolis')
        .map((response: Response) => {
            // console.log(response)
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }
}