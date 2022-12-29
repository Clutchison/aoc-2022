export class Monkey {

  readonly monkeyNumber: number;
  private items: bigint[] = [];
  private operation: (n: bigint) => bigint;
  private test: (n: bigint) => number;
  readonly divisor;
  private inspectCount: number = 0;
  private worryDivisor: number;

  constructor(input: string[], worryDivisor: number = 3) {
    this.monkeyNumber = Monkey.parseMonkeyNumber(input[0]);
    this.items = Monkey.parseStartingItems(input[1]);
    this.operation = Monkey.parseOperation(input[2]);
    [this.test, this.divisor] = Monkey.parseTestAndDivisor(input.slice(3))
    this.worryDivisor = worryDivisor;
  }

  public throw(modulo: bigint): [bigint, number][] {
    let items = this.items;
    this.items = [];
    return items.map(i => {
      this.inspectCount = this.inspectCount + 1;
      let modItem: bigint = this.operation(i) / BigInt(this.worryDivisor) % modulo;
      return [modItem, this.test(modItem)]
    });
  }

  public getInspectCount = () => this.inspectCount;

  public catch(item: bigint): void {
    this.items.push(item);
  }

  private static parseMonkeyNumber(s: string): number {
    return Number.parseInt((s.match('[0-9]+') || ['-1'])[0]);
  }

  private static parseStartingItems(s: string): bigint[] {
    return Monkey.trimPast(s, ':')
      .split(', ')
      .map((s: string) => BigInt(Number.parseInt(s)));
  }

  private static parseOperation(s: string): (number: bigint) => bigint {
    let trimmedInput: string = Monkey.trimPast(s, '= ')
      .replace(/([0-9]+)/, '$1n')
    return Function('old', 'return BigInt(' + trimmedInput + ')') as ((n: bigint) => bigint);
  }

  private static parseTestAndDivisor(sArr: string[]): [(number: bigint) => number, bigint] {
    let divideNum = Number.parseInt(Monkey.trimPast(sArr[0], 'divisible by '));
    let trueNum = Number.parseInt(Monkey.trimPast(sArr[1], 'monkey '));
    let falseNum = Number.parseInt(Monkey.trimPast(sArr[2], 'monkey '));
    return [Function('n',
      'return (n % ' + divideNum + 'n) === 0n ? ' + trueNum + ' : ' + falseNum + '') as
      (n: bigint) => number,
    BigInt(divideNum)];
  }

  private static trimPast(s: string, c: string): string {
    return (s.match(c + '.*') || [c])[0].slice(c.length).trim();
  }
}