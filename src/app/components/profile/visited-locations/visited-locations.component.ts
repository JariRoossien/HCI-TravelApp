import { Component } from '@angular/core';
import {
  ExploreCategoryItemComponent
} from "../../explore/explore-category/explore-category-item/explore-category-item.component";
import {ExploreItem} from "../../../entity/explore-item";
import {UserService} from "../../../services/user/user.service";
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";

@Component({
  selector: 'app-visited-locations',
  standalone: true,
  imports: [
    ExploreCategoryItemComponent
  ],
  templateUrl: './visited-locations.component.html',
  styleUrl: './visited-locations.component.scss'
})
export class VisitedLocationsComponent {
  categoryItems: ExploreItem[] = [];

  constructor(userService: UserService, categoryService: ExploreItemService) {
    const user = userService.travelUser;
    this.categoryItems = categoryService.getVisitedAttractions(user.visited);
  }

}
