import { Component } from '@angular/core';
import {ExploreItemService} from "../../../services/explore-items/explore-item.service";
import {ExploreItem} from "../../../entity/explore-item";
import {ExploreCardComponent} from "../../explore/explore-card/explore-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-overview',
  standalone: true,
  imports: [
    ExploreCardComponent,
    RouterLink
  ],
  templateUrl: './main-overview.component.html',
  styleUrl: './main-overview.component.scss'
})
export class MainOverviewComponent {

  cards: ExploreItem[];
  constructor(cardService: ExploreItemService) {
    this.cards = cardService.getLocalAttractions();
  }
}
