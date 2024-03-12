import { Injectable } from '@angular/core';
import {ExploreItem} from "../../entity/explore-item";
import {ExploreCategory} from "../../enums/explore-category";

@Injectable({
  providedIn: 'root'
})
export class ExploreItemService {

  exploreItems: ExploreItem[] = [];

  constructor() {
    let idCounter = 0;
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://images.adsttc.com/media/images/55e6/f619/e58e/ce03/1300/0374/large_jpg/PORTADA_06_VanGoghMuseum_EntranceBuilding_HansvanHeeswijkArchitects_photo_RonaldTilleman.jpg?1441199623",
      "Van Gogh Museum",
      `Explore the world's largest collection of works by Vincent van Gogh and other renowned artists.`,
      50,
      15,
      ExploreCategory.museums
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
        "https://cdn.museum.nl/assets/c1da6f0c-7718-4a4e-af2e-d28bc36e8b46?w=3000&c=e1debc3372c1e6d198e1fd7d3603296d039f48f473b9f4a20971174ecefd95cc",
        "Rijksmuseum",
      `Discover Dutch art and history from the Middle Ages to the present day in this iconic museum.`,      80,
        20, ExploreCategory.museums));
    this.exploreItems.push(new ExploreItem(idCounter++,
        "https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg",
        "Restaurant Steak and fries with a drink",
      `Savor a delicious meal of steak and fries accompanied by your favorite drink in a cozy Amsterdam restaurant.`,      400,
      10,
      ExploreCategory.restaurants));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://media.cntraveler.com/photos/62747cda2557371c9642605c/16:9/w_2560,c_limit/Anne%20Frank%20House%20Amsterdam_GettyImages-1040678782.jpg",
      "Anne Frank House",
      `Step into the historic house where Anne Frank and her family hid during World War II and learn about their poignant story.`,
      250,
      25,
      ExploreCategory.museums
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://cdn.getyourguide.com/img/tour/53d4bc63ea5eeed0.jpeg/145.jpg",
      "Canal Cruise",
      `Embark on a scenic canal cruise and admire the charming architecture of Amsterdam from the water.`,
      150,
      30,
      ExploreCategory.attractions
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Amsterdam%2C_Vondelpark%2C_at_the_pond-2.jpg",
      "Vondelpark",
      `Relax and unwind in Amsterdam's largest park, perfect for picnics, leisurely strolls, and outdoor activities.`,
      500,
      20,
      ExploreCategory.statues
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://www.locaties.nl/media/ii5d4spf/grid-bdb-2.jpg",
      "Heineken Experience",
      `Immerse yourself in the world of Heineken beer with interactive exhibits, tastings, and brewery tours.`,
      350,
      15,
      ExploreCategory.attractions
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://blog.kallisti.net.nz/wp-content/uploads/2015/12/amsdungeon_outside.jpg",
      "Amsterdam Dungeon",
      `Experience the darker side of Amsterdam's history with theatrical shows, rides, and special effects at the Amsterdam Dungeon.`,
      400,
      25,
      ExploreCategory.attractions
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://www.rembrandthuis.nl/wp-content/uploads/2023/03/Rembrandthuis-%C2%A9KIRSTENVANSANTEN-1.jpg",
      "Rembrandt House Museum",
      `Step into the former home and studio of Rembrandt van Rijn, one of the greatest Dutch painters, and explore his life and works.`,
      300,
      20,
      ExploreCategory.museums
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://www.tipsamsterdam.co.uk/wp-content/uploads/2023/05/amsterdam-cuyp-market-1.jpg",
      "Albert Cuyp Market",
      `Browse through a vibrant array of stalls selling everything from fresh produce to clothing and souvenirs at Amsterdam's famous street market.`,
      1700,
      15,
      ExploreCategory.attractions
    ));

    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://www.europeremembers.com/pictures/2791/amsterdam_nationaal_monument_op_de_dam_rm530906_foto2_2014-01-12_11.19_1280_1280_fit_90.jpg",
      "National Monument",
      `Pay homage to the fallen soldiers at Amsterdam's National Monument, located on Dam Square.`,
      1800,
      10,
      ExploreCategory.statues
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/AnneFrank_dHont.jpg",
      "Anne Frank Statue",
      `Visit the Anne Frank Statue, a touching tribute to the young diarist and symbol of resilience during the Holocaust.`,
      2350,
      15,
      ExploreCategory.statues
    ));
    this.exploreItems.push(new ExploreItem(idCounter++,
      "https://amsterdam.kunstwacht.nl/cache/9/8/b/98b6717238d6d0d3fbdb910f0b4d85f0_700_540.jpg",
      "Vrouwe Fortuna Statue",
      `Admire the Vrouwe Fortuna Statue, which graces the top of the Munttoren (Mint Tower) and symbolizes fortune and prosperity.`,
      1800,
      20,
      ExploreCategory.statues
    ));
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

  getVisitedAttractions(visitedIds: number[]): ExploreItem[] {
    return this.exploreItems.filter(a => visitedIds.indexOf(a.id) >= 0);
  }

  getBookmarked(bookmarks: number[]): ExploreItem[] {
    return this.exploreItems.filter(a => bookmarks.indexOf(a.id) >= 0);
  }
}
