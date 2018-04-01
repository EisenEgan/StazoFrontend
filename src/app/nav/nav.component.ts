import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  // loggedIn: boolean = false
  market: string = 'grocery'
  otherMarket: string = 'farmers'

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeMarket() {
    var changeMarketTo = this.market
    this.market = this.otherMarket
    this.otherMarket = changeMarketTo
  }

  loggedIn() {
    return this.authService.loggedIn()
  }

  logout() {
    this.authService.logout()
    this.router.navigate([''])
  }

  getName() {
    return this.authService.decodedToken.unique_name
  }

}
