export class Monkey {

  readonly monkeyNumber: number;
  private items: number[] = [];
  private operation: (n: number) => number;
  private test: (n: number) => number;
  private inspectCount: number = 0;

  constructor(input: string[]) {
    this.monkeyNumber = Monkey.parseMonkeyNumber(input[0]);
    this.items = Monkey.parseStartingItems(input[1]);
    this.operation = Monkey.parseOperation(input[2]);
    this.test = Monkey.parseTest(input.slice(3))
  }

  public throw(): [number, number][] {
    let items = this.items;
    this.items = [];
    return items.map(i => {
      this.inspectCount = this.inspectCount + 1;
      let modItem = Math.floor(this.operation(i) / 3);
      return [modItem, this.test(modItem)]
    });
  }

  public getInspectCount = () => this.inspectCount;

  public catch(item: number): void {
    this.items.push(item);
  }

  private static parseMonkeyNumber(s: string): number {
    return Number.parseInt((s.match('[0-9]+') || ['-1'])[0]);
  }

  private static parseStartingItems(s: string): number[] {
    return Monkey.trimPast(s, ':')
      .split(', ')
      .map((s: string) => Number.parseInt(s));
  }

  private static parseOperation(s: string): (number: number) => number {
    let trimmedInput: string = Monkey.trimPast(s, '= ');
    return Function('old', 'return ' + trimmedInput) as ((n: number) => number);
  }

  private static parseTest(sArr: string[]): (number: number) => number {
    let divideNum = Number.parseInt(Monkey.trimPast(sArr[0], 'divisible by '));
    let trueNum = Number.parseInt(Monkey.trimPast(sArr[1], 'monkey '));
    let falseNum = Number.parseInt(Monkey.trimPast(sArr[2], 'monkey '));
    return Function('n',
      'return (n % ' + divideNum + ') === 0 ? ' + trueNum + ' : ' + falseNum + '') as
      (n: number) => number;
  }

  private static trimPast(s: string, c: string): string {
    return (s.match(c + '.*') || [c])[0].slice(c.length).trim();
  }
}