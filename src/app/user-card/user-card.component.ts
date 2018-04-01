import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User
  constructor() { }

  ngOnInit() {
  }

  getUserBackground(bg: any) {
    if (bg)
      return bg
    else
      return 'http://ak2.picdn.net/shutterstock/videos/20107672/thumb/1.jpg'
  }

  getUserAvatar(avatarUrl: any) {
    if (avatarUrl)
      return avatarUrl
    else
      return 'https://www.synbio.cam.ac.uk/images/avatar-generic.jpg/image'
  }

}
