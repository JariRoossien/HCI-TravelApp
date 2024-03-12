import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {RewardItem} from "../../../entity/reward-item";
import {RewardService} from "../../../services/reward.service";
import {TravelUser} from "../../../entity/travel-user";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-reward-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './reward-detail.component.html',
  styleUrl: './reward-detail.component.scss'
})
export class RewardDetailComponent implements OnInit {

  rewardId: number;
  rewardItem: RewardItem;
  purchased: boolean;
  user: TravelUser;

  constructor(route: ActivatedRoute, rewardService: RewardService, userService: UserService) {
    this.rewardId = parseInt(route.snapshot.paramMap.get("rewardId") || "0");
    this.rewardItem = rewardService.getById(this.rewardId);
    this.user = userService.travelUser;
    this.purchased = false;
  }

  handlePurchase(): void {
    this.user.credits -= this.rewardItem.creditCost;
    this.purchased = true;
  }

  ngOnInit(): void {
    this.purchased = false;
  }
}
