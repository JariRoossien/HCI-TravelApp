import { Injectable } from '@angular/core';
import {RewardItem} from "../../entity/reward-item";

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  rewardItems: RewardItem[];
  constructor() {
    this.rewardItems = [];
    this.rewardItems.push(new RewardItem("La Zoccola del Pacioccone", "Free drink of any choice with your order!", "https://media-cdn.tripadvisor.com/media/photo-s/19/76/f0/71/pizze-varie-di-gianni.jpg", 5));
    this.rewardItems.push(new RewardItem("Artis Amsterdam", "Get a 2nd ticket for free when handing in this coupon!", "https://www.amsterdamtips.com/news/wp-content/uploads/2022/09/artis-amsterdam.jpg", 10));
  }

  getAll(): RewardItem[] {
    return this.rewardItems;
  }

  getById(rewardId: number): RewardItem {
    return this.rewardItems.find(a => a.id === rewardId) || RewardItem.getEmptyReward();
  }

  findAll(rewards: Map<number, number>) {
    let list: RewardItem[] = [];
    rewards.forEach((value: number, key: number) => {
      for (let i = 0; i < value; i++) {
        list.push(this.getById(key));
      }
    })
    return list;
  }
}
