import { Component, OnInit } from '@angular/core';
import { slideStateTrigger } from './animations';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    slideStateTrigger,
    // remainingListTrigger
  ]
})
export class SidenavComponent implements OnInit {

  showCategories: boolean = false
  showReviews: boolean = false
  categories = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res
    })
  }

  formatSlug(slugWithSpaces: string) {
    return slugWithSpaces.replace(" ", "_").toLowerCase()
  }
}
