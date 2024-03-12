export class TravelUser {

  public readonly bookmarks: number[] = [];
  public readonly visited: number[] = [];
  public credits: number = 5;
  public name: string = "Jari Roossien";
  public profilePic: string = "https://www.botanopia.com/wp-content/uploads/2023/04/pexels-axp-photography-16429358-e1682515637490.jpg";
  public headerPic: string = "https://a.cdn-hotels.com/gdcs/production177/d1333/8d921a0d-a457-4205-9687-669fa3607125.jpg";
  public creationDate: Date = new Date(2000, 8, 19);

  public rewards: Map<number, number>;

  constructor() {
    this.visited.push(8);
    this.bookmarks.push(5, 6);
    this.rewards = new Map();
    this.rewards.set(0, 1);
  }

  toggleBookmark(id: number): void {
    let idIndex = this.bookmarks.indexOf(id);
    if (idIndex >= 0) {
      this.bookmarks.splice(idIndex, 1);
    } else {
      this.bookmarks.push(id);
    }
  }

  addVisited(id: number): void {
    this.visited.push(id);
  }

  isBookmarked(id: number): boolean {
    return this.bookmarks.indexOf(id) >= 0;
  }

  public getTokenString(): string {
    if (this.credits == 1) {
      return "1 token";
    }
    return this.credits + " tokens";
  }

  hasVisited(itemId: number): boolean {
    return this.visited.indexOf(itemId) >= 0;
  }

  public addReward(rewardId: number): void {
      let count = this.rewards.get(rewardId) || 0;
      this.rewards.set(rewardId, count + 1);
  }

}
