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
    let v = values.indexOf(this.sharedItem) + 1;
    console.log(v);
    return v;
  }
}