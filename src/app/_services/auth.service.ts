import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { User } from '../_models/User';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/'
    userToken: any
    decodedToken: any
    jwtHelper: JwtHelper = new JwtHelper()

    constructor(
        private http: Http
    ) { }

    login(model: any) {
        const headers = new Headers({'Content-type': 'application/json'})
        const options = new RequestOptions({headers: headers})
        return this.http.post(this.baseUrl + 'login', model, options).map((response: Response) => {
            const user = response.json()
            if (user) {
                localStorage.setItem('token', user.tokenString)
                console.log(user.tokenString)
                this.decodedToken = this.jwtHelper.decodeToken(user.tokenString)
                console.log(this.decodedToken)
                this.userToken = user.tokenString
            }
        })
    }

    register(user: User) {
        const headers = new Headers({'Content-type': 'application/json'})
        const options = new RequestOptions({headers: headers})
        return this.http.post(this.baseUrl + 'register', user, options)
    }

    validateUsername(username){
        return this.http.get(this.baseUrl + 'validate-username/' + username).map(res => res.json());
    }

    validateEmail(email){
        return this.http.post(this.baseUrl + 'validate-email', { email: email })
        .map(res => res.json());
    }

    loggedIn() {
        return tokenNotExpired()
    }

    logout() {
        localStorage.removeItem('token')
    }

}