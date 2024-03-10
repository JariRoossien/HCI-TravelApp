import {Component, Input} from '@angular/core';
import {ExploreItem} from "../../../../entity/explore-item";
import {ExploreCategory} from "../../../../enums/explore-category";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-explore-category-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './explore-category-item.component.html',
  styleUrl: './explore-category-item.component.scss'
})
export class ExploreCategoryItemComponent {
  @Input() exploreCard: ExploreItem;

  constructor() {
    this.exploreCard = new ExploreItem(0, "", "","", 0, 0, ExploreCategory.attractions);
  }

  getDistance(): string {
    const distance: number = this.exploreCard.distance;
    if (distance < 1000) {
      return `${distance}m away`
    }
    return `${(distance / 1000).toFixed(2)}km away`;
  }

}
