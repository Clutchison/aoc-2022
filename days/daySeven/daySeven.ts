import { Day } from "../day";

export class DaySeven extends Day {
  run(): void {
    let inputs = super.getInput();

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: string) {
    this.logPartOne('Unsolved');
  }

  private partTwo(inputs: string) {
    this.logPartOne('Unsolved');
  }

  toString(): string {
    return 'Day 7';
  }
}