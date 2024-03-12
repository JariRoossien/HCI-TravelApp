import { Component } from '@angular/core';
import {
  ExploreCategoryItemComponent
} from "../../explore/explore-category/explore-category-item/explore-category-item.component";
import {RewardListItemComponent} from "./reward-list-item/reward-list-item.component";
import {RouterLink} from "@angular/router";
import {RewardItem} from "../../../entity/reward-item";
import {RewardService} from "../../../services/rewards/reward.service";
import {UserService} from "../../../services/user/user.service";
import {TravelUser} from "../../../entity/travel-user";

@Component({
  selector: 'app-reward-overview',
  standalone: true,
  imports: [
    ExploreCategoryItemComponent,
    RewardListItemComponent,
    RouterLink
  ],
  templateUrl: './reward-overview.component.html',
  styleUrl: './reward-overview.component.scss'
})
export class RewardOverviewComponent {

  rewardItems: RewardItem[];
  user: TravelUser;

  constructor(private rewardService: RewardService, private userService: UserService) {
    this.rewardItems = rewardService.getAll();
    this.user = userService.travelUser;
  }

}
