import {ExploreCategory} from "../enums/explore-category";

export class ExploreItem {

  readonly image: string;
  readonly title: string;
  readonly description: string;
  readonly distance: number;
  readonly xp: number;
  readonly id: number;
  readonly category: ExploreCategory;


  constructor(id: number, image: string, title: string, description: string, distance: number, xp: number, category: ExploreCategory) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.distance = distance;
    this.xp = xp;
    this.category = category;
  }

  getDistanceString(): string {
    const distance: number = this.distance;
    if (distance < 1000) {
      return `${distance}m away`
    }
    return `${(distance / 1000).toFixed(2)}km away`;
  }

}
