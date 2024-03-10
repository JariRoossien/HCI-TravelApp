import {Component, Input} from '@angular/core';
import {ExploreCategory} from "../../../enums/explore-category";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ExploreItem} from "../../../entity/explore-item";
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {ExploreCategoryItemComponent} from "./explore-category-item/explore-category-item.component";

@Component({
  selector: 'app-explore-category',
  standalone: true,
  imports: [
    ExploreCategoryItemComponent,
    RouterLink
  ],
  templateUrl: './explore-category.component.html',
  styleUrl: './explore-category.component.scss'
})
export class ExploreCategoryComponent  {

  category: ExploreCategory;
  categoryItems: ExploreItem[];
  constructor(route: ActivatedRoute, itemService: ExploreItemService) {
    const catId = parseInt(route.snapshot.paramMap.get("categoryId") || "0");
    this.category = ExploreCategory.values()[catId];
    this.categoryItems = itemService.getByCategory(this.category);
  }


}
