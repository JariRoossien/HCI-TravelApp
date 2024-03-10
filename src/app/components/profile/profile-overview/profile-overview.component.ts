import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {TravelUser} from "../../../entity/travel-user";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.scss'
})
export class ProfileOverviewComponent {

  user: TravelUser;

  constructor(userService: UserService) {
    this.user = userService.travelUser;

  }

}
