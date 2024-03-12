import { Component } from '@angular/core';
import {
    ExploreCategoryItemComponent
} from "../../explore/explore-category/explore-category-item/explore-category-item.component";
import {UserService} from "../../../services/user/user.service";
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {RewardService} from "../../../services/rewards/reward.service";
import {RewardItem} from "../../../entity/reward-item";
import {RewardListItemComponent} from "../../rewards/reward-overview/reward-list-item/reward-list-item.component";

@Component({
  selector: 'app-reward-overview',
  standalone: true,
  imports: [
    ExploreCategoryItemComponent,
    RewardListItemComponent
  ],
  templateUrl: './profile-reward-overview.component.html',
  styleUrl: './profile-reward-overview.component.scss'
})
export class ProfileRewardOverviewComponent {
  rewardItems: RewardItem[];
  constructor(userService: UserService, rewardService: RewardService) {
    const user = userService.travelUser;
    this.rewardItems = rewardService.findAll(user.rewards);
  }

}
