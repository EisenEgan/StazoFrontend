import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  Arr = Array;
  stars: number
  starsLeft: number
  odd: boolean

  @Input() rating: number
  
  constructor() { }

  ngOnInit() {
    var tempRating = Math.round(this.rating * 2)
    this.odd = tempRating % 2 == 1
    if (this.odd)
      tempRating = tempRating - 1
    this.stars = tempRating / 2
    this.starsLeft = 5 - this.stars - (this.odd ? 1 : 0)
  }

}
