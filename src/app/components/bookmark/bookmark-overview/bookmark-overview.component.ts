import { Component } from '@angular/core';
import {
    ExploreCategoryItemComponent
} from "../../explore/explore-category/explore-category-item/explore-category-item.component";
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {ExploreItem} from "../../../entity/explore-item";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-bookmark-overview',
  standalone: true,
    imports: [
        ExploreCategoryItemComponent
    ],
  templateUrl: './bookmark-overview.component.html',
  styleUrl: './bookmark-overview.component.scss'
})
export class BookmarkOverviewComponent {
  categoryItems: ExploreItem[] = [];

  constructor(userService: UserService, categoryService: ExploreItemService) {
    const user = userService.travelUser;
    this.categoryItems = categoryService.getBookmarked(user.bookmarks);
  }

}
