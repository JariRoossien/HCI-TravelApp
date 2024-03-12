export class RewardItem {

  private static idCounter: number = 0;

  public readonly id: number;

  constructor(public readonly title: string,
              public readonly description: string,
              public readonly imageUrl: string,
              public readonly creditCost: number) {
    this.id = RewardItem.idCounter++;
  }

  public static getEmptyReward(): RewardItem {
    RewardItem.idCounter--;
    return new RewardItem("", "", "" ,0);
  }

  public getTokenString(): string {
    if (this.creditCost == 1) return "1 token";
    return this.creditCost + " tokens";
  }
}
