import { Day } from "../day";

export class DayEight extends Day {
  run(): void {
    let inputs = super.getInput();
    this.partOne();
    this.partTwo()
  }

  private partOne() {
    this.logPartOne('Unsolved');
  }

  private partTwo() {
    this.logPartTwo('Unsolved');
  }

  toString(): string {
    return 'Day 8';
  }
}