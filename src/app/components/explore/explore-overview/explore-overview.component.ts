import { Component } from '@angular/core';
import {ExploreCardComponent} from "../explore-card/explore-card.component";
import {ExploreItem} from "../../../entity/explore-item";
import {ExploreCategory} from "../../../enums/explore-category";
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-explore-overview',
  standalone: true,
  imports: [
    ExploreCardComponent,
    RouterLink
  ],
  templateUrl: './explore-overview.component.html',
  styleUrl: './explore-overview.component.scss'
})
export class ExploreOverviewComponent {
  nearbyCards: ExploreItem[];
  constructor(exploreItemService: ExploreItemService) {
    this.nearbyCards = exploreItemService.getLocalAttractions();
  }

  protected readonly Object = Object;
  protected readonly ExploreCategory = ExploreCategory;
}
