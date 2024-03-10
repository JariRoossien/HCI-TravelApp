export class ExploreCategory {
  public static readonly attractions = new ExploreCategory("Attractions", "Explore Amsterdam's captivating landmarks and attractions!", "https://www.amsterdamtips.com/news/wp-content/uploads/2019/02/hortus-botanicus-amsterdam-768x405.jpg");
  public static readonly statues = new ExploreCategory("Statues", "Discover Amsterdam's diverse collection of striking statues and sculptures!","https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Overzicht_voorzijde_-_Amsterdam_-_20357041_-_RCE.jpg/1200px-Overzicht_voorzijde_-_Amsterdam_-_20357041_-_RCE.jpg");
  public static readonly restaurants = new ExploreCategory("Restaurants", "Indulge in Amsterdam's culinary delights at a variety of eateries offering diverse cuisines!", "https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg");
  public static readonly museums = new ExploreCategory("Museums", "Immerse yourself in Amsterdam's rich cultural heritage at its world-renowned museums!", "https://cdn.museum.nl/assets/c1da6f0c-7718-4a4e-af2e-d28bc36e8b46?w=3000&c=e1debc3372c1e6d198e1fd7d3603296d039f48f473b9f4a20971174ecefd95cc");

  private static pValues: ExploreCategory[] = [this.attractions, this.statues, this.restaurants, this.museums];

  public static values(): ExploreCategory[] {
    return this.pValues;
  }

  public static getIndex(category: ExploreCategory): number {
    for (let i = 0; i < this.pValues.length; i++) {
      if (this.pValues[i].title === category.title) return i;
    }
    return -1;
  }
  public constructor(public readonly title: string, public readonly description: string, public readonly url: string) {
  }

}
