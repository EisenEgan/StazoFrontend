import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../_models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: Product
  @Input() location: Location
  new: boolean

  constructor() {
  }

  ngOnInit() {
    var d: Date = new Date()
    if (this.product) {
      var dateCreated = new Date(this.product.created)
      this.new = ((d.getTime() - dateCreated.getTime()) / (1000 * 3600 * 24)) < 7
    }
    else
      this.new = false
  }

  formatSlug(slugWithSpaces: string) {
    return slugWithSpaces.replace(/\s/g, "_").replace(/['\.]/g, "").toLowerCase()
  }
}
