import { Monkey } from "./monkey";

export class MonkeyCircle {
  private monkeys: Monkey[]
  private modulo: bigint;

  constructor(input: string[], worryDivisor: number = 3) {
    this.monkeys = Array((input.length + 1) / 7).fill(0).map((_, index) =>
      new Monkey(input.slice(7 * index, 7 * index + 6), worryDivisor));
    this.modulo = this.monkeys.map(m => m.divisor).reduce((acc, cur) => acc * cur, 1n);
  }

  public round(): void {
    this.monkeys.forEach(monkey => monkey.throw(this.modulo)
      .forEach(tuple => this.monkeys[tuple[1]].catch(tuple[0])));
  }

  public rounds(times: number) {
    Array(times).fill(0).forEach(_ => this.round());
  }

  public monkeyBusiness = () => {
    let businessNumbers = this.monkeys
      .map(monkey => monkey.getInspectCount()).sort((n1, n2) => n1 > n2 ? -1 : 1);
    return businessNumbers[0] * businessNumbers[1];
  }
}