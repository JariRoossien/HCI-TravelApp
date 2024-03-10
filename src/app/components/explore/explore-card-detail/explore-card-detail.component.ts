import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ExploreItemService} from "../../../services/explore-item.service";
import {ExploreCategory} from "../../../enums/explore-category";
import {ExploreItem} from "../../../entity/explore-item";
import {ExploreCategoryItemComponent} from "../explore-category/explore-category-item/explore-category-item.component";

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

  constructor(route: ActivatedRoute, itemService: ExploreItemService, router: Router) {
    const itemId = parseInt(route.snapshot.paramMap.get("itemId") || "0");
    const itemFound = itemService.getItemFromId(itemId);
    if (!itemFound) {
      router.navigate(['/explore']).then(r => { alert("Item did not exist!")});
    }
    this.exploreItem = itemFound || new ExploreItem(0, "", "", 0, 0, ExploreCategory.museums);

  }

  protected readonly ExploreCategory = ExploreCategory;
}
