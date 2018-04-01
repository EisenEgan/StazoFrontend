import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/Product';
import { Location } from '../_models/Location';
import { User } from '../_models/User';
import { Review } from '../_models/Review';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  date: Date = new Date(new Date().setHours(new Date().getHours() - 2))
  
  constructor() { }

  ngOnInit() {
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

  location: Location = {
    name: "Von's",
    address: '10460 Clairemont Mesa Blvd',
    city: 'San Diego',
    state: 'CA',
    zip: 92124,
    country: 'USA',
    photoUrl: 'https://dynl.mktgcdn.com/p/_cxUxCeWyDZWQIRB-FFQyb5i26CT9FZHPtIYpV3-Hd0/511x339.jpg',
    marketType: 'Grocery'
  }

  user: User = {
    userRole: 1,
    email: 'sirsurfer@gmail.com',
    username: 'surfer',
    socialProvider: 'none',
    avatarUrl: 'http://2famous.tv/wp-content/uploads/2013/04/Lamborghini-Aventador-LP-700-4-In-The-Desert-1.jpg',
    reviewCount: 4,
    lastActive: this.date,
    backgroundImageUrl: 'https://i0.wp.com/psdboom.com/wp-content/uploads/2014/07/dfgh.jpg?w=900'       
  }

  review: Review = {
    user: this.user,
    location: this.location,
    product: this.product,
    text: "this was super good like I'm totally super impressed I mean oh my god yummy.",
    starScore: (9 / 2),
    createdAt: this.date,
    photos: [],
    likes: 2
  }

}
