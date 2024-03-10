export class TravelUser {

  public readonly bookmarks: number[] = [];
  public readonly visited: number[] = [];

  public name: string = "Jari Roossien";
  public profilePic: string = "https://www.botanopia.com/wp-content/uploads/2023/04/pexels-axp-photography-16429358-e1682515637490.jpg";
  public headerPic: string = "https://a.cdn-hotels.com/gdcs/production177/d1333/8d921a0d-a457-4205-9687-669fa3607125.jpg";
  public creationDate: Date = new Date(2000, 8, 19);

  constructor() {
    this.bookmarks.push(1);
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
}
