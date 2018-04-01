import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('http://localhost:5000/api/user').map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    getUser(username: string) {
        return this.http.get('http://localhost:5000/api/user/' + username)
        .map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }
}