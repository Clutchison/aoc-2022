const values = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export class Rucksack {
  private readonly compartments: Set<string>[];
  private readonly sharedItem: string;

  constructor(s: string) {
    let compSize = s.length / 2;
    this.compartments = [[...s.slice(0, compSize)], [...s.slice(compSize)]]
      .map(arrs => new Set([...arrs]));
    this.sharedItem = [...this.compartments[0]].find(c => this.compartments[1].has(c)) || '';
  }

  public getSharedItem(): string {
    return this.sharedItem;
  }

  public getValue(): number {
    return Rucksack.value(this.sharedItem);
  }

  public getItems(): Set<string> {
    return new Set([...this.compartments[0], ...this.compartments[1]]);
  }

  public static findBadgeValue(sacks: Rucksack[]): number {
    return this.value(Rucksack.findBadge(sacks));
  }

  public static findBadge(sacks: Rucksack[]): string {
    if (!sacks || sacks.length != 3) throw new Error("Need more sacks!");
    return [...sacks.map(sack => sack.getItems())
      .reduce((acc, cur) => acc.size === 0 ? cur : new Set([...acc].filter(i => cur.has(i))),
        new Set())][0];
  }

  private static value(s: string): number {
    return values.indexOf(s) + 1;
  }
}