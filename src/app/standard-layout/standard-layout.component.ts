import { Component, OnInit } from '@angular/core';
import { slideStateTrigger } from './animations';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.css'],
  animations: [slideStateTrigger]
})
export class StandardLayoutComponent implements OnInit {

  showProductNav: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
