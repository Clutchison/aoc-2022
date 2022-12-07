import _ from "lodash";

export class Assignment {

  private readonly start: number;
  private readonly end: number;

  private static readonly inputPattern = '^[0-9]+-[0-9]+$'

  constructor(s: string) {
    if (!s.match(Assignment.inputPattern)) throw new Error("Bad input string: " + s);
    this.start = Number.parseInt(s.slice(0, s.indexOf('-')))
    this.end = Number.parseInt(s.slice(s.indexOf('-') + 1));
  }

  public overlapWith(o: Assignment): number[] {
    if (o.start > this.end || o.end < this.start) return [];
    let p = [this.range(), o.range()].sort(r => r.length);
    return p[0].filter((n1: number) => p[1].find(n2 => n2 === n1) !== undefined)
  }

  public range(): number[] {
    return _.range(this.start, this.end + 1);
  }

  public toString(): string {
    return this.start + '-' + this.end;
  }
}