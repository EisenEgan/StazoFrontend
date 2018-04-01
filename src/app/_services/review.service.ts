import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ReviewService {

    constructor(private http: Http) { }

    getProductsByReviews(type: string) {
        return this.http.get('http://localhost:5000/api/product/review/' + type)
        .map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

}