import { Day } from "../day";
import { Pair } from "./model/pair";

export class DayFour extends Day {
  run(): void {
    let inputs = super.getInput() // Get Input
      .split('\r\n')
      .map(i => new Pair(i));

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: Pair[]) {
    this.logPartOne(inputs.filter(pair => pair.fullyContained()).length);
  }

  private partTwo(inputs: Pair[]) {
    this.logPartTwo(inputs.map(p => p.overlap()).filter(r => r.length > 0).length);
  }

  toString(): string {
    return 'Day 4';
  }
}