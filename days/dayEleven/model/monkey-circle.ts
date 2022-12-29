import { Monkey } from "./monkey";

export class MonkeyCircle {
  private monkeys: Monkey[]

  constructor(input: string[]) {
    this.monkeys = Array((input.length + 1) / 7).fill(0).map((_, index) =>
      new Monkey(input.slice(7 * index, 7 * index + 6)));
  }

  public round(): void {
    this.monkeys.forEach(monkey => monkey.throw()
      .forEach(tuple => this.monkeys[tuple[1]].catch(tuple[0])));
  }

  public rounds(times: number) {
    Array(times).fill(0).forEach(_ => this.round());
  }

  public monkeyBusiness = () => {
    let businessNumbers = this.monkeys
      .map(monkey => monkey.getInspectCount()).sort().reverse();
    return businessNumbers[0] * businessNumbers[1];
  }
}