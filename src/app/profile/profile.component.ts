import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { Location } from '../_models/Location';
import { Review } from '../_models/Review';
import { Product } from '../_models/Product';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  date: Date = new Date(new Date().setHours(new Date().getHours() - 2))
  user: any = {}
  userLoaded: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params.username).subscribe(res => {
        this.user = res
        this.userLoaded = true           
      })
    })
  }

  ngOnInit() {
  }

  getUserBackground(bg: any) {
    if (this.userLoaded) {
      if (bg)
        return bg
      else
        return 'http://ak2.picdn.net/shutterstock/videos/20107672/thumb/1.jpg'
    }
  }

  getUserAvatar(avatarUrl: any) {
    if (this.userLoaded) {
      if (avatarUrl)
        return avatarUrl
      else
        return 'https://www.synbio.cam.ac.uk/images/avatar-generic.jpg/image'
    }
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
  //   reviewCount: 12,
  //   lastActive: this.date,
  //   backgroundImageUrl: 'https://i0.wp.com/psdboom.com/wp-content/uploads/2014/07/dfgh.jpg?w=900'
  // }

  // review: Review = {
  //   user: this.user,
  //   location: this.location,
  //   product: this.product,
  //   text: "this was super good like I'm totally super impressed I mean oh my god yummy.",
  //   starScore: (9 / 2),
  //   createdAt: this.date,
  //   photos: [],
  //   likes: 2
  // }
}
