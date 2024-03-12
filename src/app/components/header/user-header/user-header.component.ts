import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {TravelUser} from "../../../entity/travel-user";

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {

  user: TravelUser;

  constructor(uService: UserService) {
    this.user = uService.travelUser;
  }
}
