import { Day } from "../day";

export class DayFive extends Day {
  run(): void {
    let inputs = super.getInput() // Get Input

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: number[]) {
    this.logPartOne('Unsolved');
  }

  private partTwo(inputs: number[]) {
    this.logPartTwo('Unsolved');
  }

  toString(): string {
    return 'Day 5';
  }
}