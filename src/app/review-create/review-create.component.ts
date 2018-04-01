import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/Product';
import { NgForm } from '@angular/forms';
import { slideStateTrigger } from './animations';
import { Location } from '../_models/location'

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css'],
  animations: [slideStateTrigger]
})
export class ReviewCreateComponent implements OnInit {

  Arr = Array
  zipCode: string = ""
  address: any = {
    city: "",
    state: ""
  }
  zipClicked: boolean = false
  cityClicked: boolean = false
  valid: boolean = false
  results: any = []
  location: any
  locationSubmitted: boolean = false
  review: any = {
    text: "",
    rating: 0
  }

  states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", 
  "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", 
  "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", 
  "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", 
  "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

  date: Date = new Date(new Date().setHours(new Date().getHours() - 2))

  constructor() { }

  ngOnInit() {
  }

  showOption(option: string) {
    if (option == 'zip') {
      this.zipClicked = !this.zipClicked
      this.cityClicked = false
    } else if (option == 'city') {
      this.zipClicked = false
      this.cityClicked = !this.cityClicked
    }
  }

  submitZip(form: NgForm) {
    if (form.valid) {
      this.zipClicked = false
      this.valid = true
      var results = []
      results.push(this.locationOne)
      results.push(this.locationTwo)
      this.results = results
    }
  }

  submitCity(form: NgForm) {
    console.log(form.valid)
    if (form.valid) {
      this.cityClicked = false
      this.valid = true
      var results = []
      results.push(this.locationOne)
      results.push(this.locationTwo)
      this.results = results
    }
  }

  submitResult(form: NgForm) {
    if (form.valid) {
      // this.cityClicked = false
      // this.valid = true
      // var results = []
      // results.push(this.locationOne)
      // results.push(this.locationTwo)
      // this.results = results
      this.locationSubmitted = true
    }
  }

  submitReview(form: NgForm) {
    console.log(form.valid)
    if (form.valid && this.review.rating > 0) {
      console.log('prints')
      // this.cityClicked = false
      // this.valid = true
      // var results = []
      // results.push(this.locationOne)
      // results.push(this.locationTwo)
      // this.results = results
    }
  }

  reset() {
    this.zipCode = ""
    this.address = {
      city: "",
      state: ""
    }
    this.valid = false
    this.results = []
    this.location = null
    this.locationSubmitted = false
  }

    // text: "this was super good like I'm totally super impressed I mean oh my god yummy.",
    // starScore: (9 / 2),
    // photos: [],

  selectRating(rating: number) {
    console.log(rating)
    this.review.rating = rating
  }

  product: Product = {
    categoryId: 0,
    categoryName: "Frozen",
    brandName: "White Castle",
    name: "Breakfast Sliders",
    starRating: 3.3,
    photoUrl: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0849c72d-77be-4f25-9a53-ffa86e132158.JPG",
    market: "Grocery",
    adminApproved: true,
    created: this.date
  }

  locationOne: Location = {
    name: "Von's",
    address: '10460 Clairemont Mesa Blvd',
    city: 'San Diego',
    state: 'CA',
    zip: 92124,
    country: 'USA',
    photoUrl: 'https://dynl.mktgcdn.com/p/_cxUxCeWyDZWQIRB-FFQyb5i26CT9FZHPtIYpV3-Hd0/511x339.jpg',
    marketType: 'Grocery'
  }

  locationTwo: Location = {
    name: "Ralph's",
    address: '101 G St',
    city: 'San Diego',
    state: 'CA',
    zip: 92101,
    country: 'USA',
    photoUrl: 'https://dynl.mktgcdn.com/p/_cxUxCeWyDZWQIRB-FFQyb5i26CT9FZHPtIYpV3-Hd0/511x339.jpg',
    marketType: 'Grocery'
  }
}
