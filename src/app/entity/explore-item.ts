import {ExploreCategory} from "../enums/explore-category";

export class ExploreItem {

  readonly image: string;
  readonly title: string;
  readonly distance: number;
  readonly xp: number;
  readonly id: number;
  readonly category: ExploreCategory;
  constructor(id: number, image: string, title: string, distance: number, xp: number, category: ExploreCategory) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.distance = distance;
    this.xp = xp;
    this.category = category;
  }
}
