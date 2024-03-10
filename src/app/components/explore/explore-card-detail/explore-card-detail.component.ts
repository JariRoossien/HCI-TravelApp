import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {ExploreCategory} from "../../../enums/explore-category";
import {ExploreItem} from "../../../entity/explore-item";
import {ExploreCategoryItemComponent} from "../explore-category/explore-category-item/explore-category-item.component";
import {UserService} from "../../../services/user/user.service";
import {TravelUser} from "../../../entity/travel-user";

@Component({
  selector: 'app-explore-card-detail',
  standalone: true,
  imports: [
    ExploreCategoryItemComponent,
    RouterLink
  ],
  templateUrl: './explore-card-detail.component.html',
  styleUrl: './explore-card-detail.component.scss'
})
export class ExploreCardDetailComponent {

  exploreItem: ExploreItem;
  user: TravelUser;
  itemId: number;
  constructor(route: ActivatedRoute, itemService: ExploreItemService, userService: UserService, router: Router) {
    this.itemId = parseInt(route.snapshot.paramMap.get("itemId") || "0");
    const itemFound = itemService.getItemFromId(this.itemId);
    if (!itemFound) {
      router.navigate(['/explore']).then(r => { alert("Item did not exist!")});
    }
    this.exploreItem = itemFound || new ExploreItem(0, "", "", "", 0, 0, ExploreCategory.museums);
    this.user = userService.travelUser;
  }

  protected readonly ExploreCategory = ExploreCategory;

  toggleBookmark() {
    this.user.toggleBookmark(this.itemId);
  }
}
