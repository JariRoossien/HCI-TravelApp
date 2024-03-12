import { Component } from '@angular/core';
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {ExploreItem} from "../../../entity/explore-item";
import {ExploreCardComponent} from "../../explore/explore-card/explore-card.component";
import {RouterLink} from "@angular/router";
import {RewardService} from "../../../services/rewards/reward.service";
import {RewardItem} from "../../../entity/reward-item";
import {MainRewardCardComponent} from "../main-reward-card/main-reward-card.component";

@Component({
  selector: 'app-main-overview',
  standalone: true,
  imports: [
    ExploreCardComponent,
    RouterLink,
    MainRewardCardComponent
  ],
  templateUrl: './main-overview.component.html',
  styleUrl: './main-overview.component.scss'
})
export class MainOverviewComponent {

  cards: ExploreItem[];
  rewards: RewardItem[];
  constructor(cardService: ExploreItemService, rewardService: RewardService) {
    this.cards = cardService.getLocalAttractions();
    this.rewards = rewardService.getAll().slice(0, 5);
  }
}
