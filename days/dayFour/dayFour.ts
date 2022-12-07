import { Day } from "../day";
import { Pair } from "./model/pair";

export class DayFour extends Day {
  run(): void {
    let inputs = super.getInput() // Get Input
      .split('\r\n');

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: string[]) {
    this.logPartOne(inputs.map(i => new Pair(i))
      .filter(pair => pair.fullyContained())
      .length);
  }

  private partTwo(inputs: number[]) {
    this.logPartTwo('Unsolved');
  }

  toString(): string {
    return 'Day 4';
  }
}