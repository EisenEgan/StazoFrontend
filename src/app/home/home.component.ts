import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/Product';
import { Location } from '../_models/Location';
import { User } from '../_models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { ListAnimationTrigger } from './animations';
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { ProductService } from '../_services/product.service';
import { LocationService } from '../_services/location.service';
import { UserService } from '../_services/user.service';
import { ReviewService } from '../_services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-60%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(20px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  Arr = Array;
  page: string
  queryString: string = ""
  results: any = []
  resultsLoaded: boolean = false
  searchableList: any = []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private locationService: LocationService,
    private userService: UserService,
    private reviewService: ReviewService
  ) {
    if (activatedRoute.snapshot.url.length) {
      if (activatedRoute.snapshot.url[0].path == 'users') {
        this.page = 'users'
        this.userService.getUsers().subscribe(res => {
          this.results = res
          this.resultsLoaded = true;
          this.searchableList = ['email', 'username']
        })
      }
      else if (activatedRoute.snapshot.url[0].path == 'locations') {
        this.page = 'locations'
        this.locationService.getLocations().subscribe(res => {
          this.results = res
          this.resultsLoaded = true;
          this.searchableList = ['name', 'address', 'city', 'state']
        })
      }
      else if (activatedRoute.snapshot.url[0].path == 'category') {
        this.page = 'category'
        this.activatedRoute.params.subscribe(params => {
          this.productService.getProductsByCategory(params.categoryName).subscribe(res => {
            this.results = res
            this.resultsLoaded = true;  
            this.searchableList = ['brandName','name']          
          })
        })
      }
      else if (activatedRoute.snapshot.url[0].path == 'reviews') {
        this.page = 'review'
        this.activatedRoute.params.subscribe(params => {
          this.reviewService.getProductsByReviews(params.type).subscribe(res => {
            this.results = res
            this.resultsLoaded = true;
            this.searchableList = ['brandName','name']    
          })
        })
      }
    } else {
      this.page = 'home'
      this.productService.getProducts().subscribe(res => {
        this.results = res
        this.resultsLoaded = true;
        this.searchableList = ['brandName','name']  
      })
    }
  }

  ngOnInit() {
  }

  // product: Product = {
  //   categoryId: 0,
  //   categoryName: "Frozen",
  //   brandName: "White Castle",
  //   name: "Breakfast Sliders",
  //   starRating: 3.3,
  //   photoUrl: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0849c72d-77be-4f25-9a53-ffa86e132158.JPG",
  //   market: "Grocery",
  //   adminApproved: true,
  //   created: this.date
  // }

  // location: Location = {
  //   name: "Von's",
  //   address: '10460 Clairemont Mesa Blvd',
  //   city: 'San Diego',
  //   state: 'CA',
  //   zip: 92124,
  //   country: 'USA',
  //   photoUrl: 'https://dynl.mktgcdn.com/p/_cxUxCeWyDZWQIRB-FFQyb5i26CT9FZHPtIYpV3-Hd0/511x339.jpg',
  //   marketType: 'Grocery'
  // }

  // user: User = {
  //   userRole: 1,
  //   email: 'sirsurfer@gmail.com',
  //   username: 'surfer',
  //   socialProvider: 'none',
  //   avatarUrl: 'http://2famous.tv/wp-content/uploads/2013/04/Lamborghini-Aventador-LP-700-4-In-The-Desert-1.jpg',
  //   reviewCount: 4,
  //   lastActive: this.date,
  //   backgroundImageUrl: 'https://i0.wp.com/psdboom.com/wp-content/uploads/2014/07/dfgh.jpg?w=900'   
  // }
}
