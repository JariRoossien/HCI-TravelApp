import {Component, Input} from '@angular/core';
import {RewardItem} from "../../../entity/reward-item";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-reward-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-reward-card.component.html',
  styleUrl: './main-reward-card.component.scss'
})
export class MainRewardCardComponent {

  @Input() rewardCard: RewardItem;

  constructor() {
    this.rewardCard = RewardItem.getEmptyReward();
  }
}
