import { Assignment } from "./assignment";

export class Pair {
  private readonly assignments: Assignment[];
  private static readonly inputPattern = '^.*,.*$'

  constructor(s: string) {
    if (!s.match(Pair.inputPattern)) throw new Error("Bad input string: " + s);
    this.assignments = s.split(',').map(assString => new Assignment(assString))
  }

  public overlap(): number[] {
    return this.assignments[0].overlapWith(this.assignments[1]);
  }

  public fullyContained(): boolean {
    return this.overlap().length === Math.min(...this.assignments.map(a => a.range().length))
  }

  public toString(): string {
    return this.assignments[0].toString() + ',' + this.assignments[1].toString();
  }
}