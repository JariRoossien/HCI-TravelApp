import { Injectable } from '@angular/core';
import {RewardItem} from "../entity/reward-item";

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  rewardItems: RewardItem[];
  constructor() {
    this.rewardItems = [];
    this.rewardItems.push(new RewardItem("La Zoccola del Pacioccone", "Free drink of any choice with your order!", "https://media-cdn.tripadvisor.com/media/photo-s/19/76/f0/71/pizze-varie-di-gianni.jpg", 5));
  }

  getAll(): RewardItem[] {
    return this.rewardItems;
  }

  getById(rewardId: number): RewardItem {
    return this.rewardItems.find(a => a.id === rewardId) || RewardItem.getEmptyReward();
  }
}
