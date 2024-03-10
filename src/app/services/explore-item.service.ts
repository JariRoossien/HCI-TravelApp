import { Injectable } from '@angular/core';
import {ExploreItem} from "../entity/explore-item";
import {ExploreCategory} from "../enums/explore-category";

@Injectable({
  providedIn: 'root'
})
export class ExploreItemService {

  exploreItems: ExploreItem[] = [];

  constructor() {
    this.exploreItems.push(new ExploreItem(0,
      "https://images.adsttc.com/media/images/55e6/f619/e58e/ce03/1300/0374/large_jpg/PORTADA_06_VanGoghMuseum_EntranceBuilding_HansvanHeeswijkArchitects_photo_RonaldTilleman.jpg?1441199623",
      "Van Gogh Museum",
      200,
      15,
      ExploreCategory.attractions
    ));
    this.exploreItems.push(new ExploreItem(1,
        "https://cdn.museum.nl/assets/c1da6f0c-7718-4a4e-af2e-d28bc36e8b46?w=3000&c=e1debc3372c1e6d198e1fd7d3603296d039f48f473b9f4a20971174ecefd95cc",
        "Rijksmuseum",
        300,
        20, ExploreCategory.attractions));
    this.exploreItems.push(new ExploreItem(2,
        "https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg",
        "Restaurant Steak and fries with a drink", 400, 10, ExploreCategory.restaurants))
  }

  getLocalAttractions(): ExploreItem[] {
    return this.exploreItems.sort((a,b) => a.distance - b.distance).slice(0, 4);
  }

  getByCategory(category: ExploreCategory): ExploreItem[] {
    return this.exploreItems.filter(a => a.category.title === category.title).sort((a, b) => a.distance - b.distance).slice(0, 10);
  }

  getItemFromId(id: number): ExploreItem | undefined {
    return this.exploreItems.filter(a => a.id === id).at(0);
  }
}
