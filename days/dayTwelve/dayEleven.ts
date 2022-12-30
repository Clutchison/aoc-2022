import { Day } from "../day";

export class DayTwelve extends Day {
  run(): void {
    let input = super.getInput().split('\r\n');
    this.partOne(input);
    this.partTwo(input);
  }

  private partOne(input: string[]) {
    this.logPartOne("Not Implemented");
  }

  private partTwo(input: string[]) {
    this.logPartTwo("Not Implemented");
  }

  toString(): string {
    return 'Day 12';
  }
}