import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('http://localhost:5000/api/product').map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    getProduct(productDetails: any) {
        return this.http.get('http://localhost:5000/api/product/find/' + productDetails.brand + '/' + productDetails.product)
        .map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    getBrands() {
        return this.http.get('http://localhost:5000/api/brand').map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    getProductsByCategory(categoryName: string) {
        return this.http.get('http://localhost:5000/api/product/category/' + categoryName)
        .map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    getCategories() {
        return this.http.get('http://localhost:5000/api/category').map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

    addProduct(product: any) {
        // const headers = new Headers({'Content-type': 'application/json'})
        // const options = new RequestOptions({headers: headers})
        // return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + 
        // '&key=AIzaSyAJAEPBxPzgNQxBzPX_wIKtqhdUjYo2JLY').map((response: Response) => {
        //     console.log(response.json())
        //     // const zipInfo = response.json()
        //     return response.json()
        // })
        return this.http.post('http://localhost:5000/api/product', product).map((response: Response) => {
            return response.json()
        }, (err) => {
            console.log(err)
        })
    }

}