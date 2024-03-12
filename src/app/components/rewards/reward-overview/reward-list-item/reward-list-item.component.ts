import {Component, Input} from '@angular/core';
import {RewardItem} from "../../../../entity/reward-item";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-reward-list-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './reward-list-item.component.html',
  styleUrl: './reward-list-item.component.scss'
})
export class RewardListItemComponent {

  @Input() rewardItem: RewardItem;

  constructor() {
    this.rewardItem = RewardItem.getEmptyReward();
  }
}
