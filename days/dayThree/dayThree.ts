import { Day } from "../day";
import { Rucksack } from "./rucksack";

export class DayThree extends Day {
  run(): void {
    let inputs = super.getInput();
    this.partOne(inputs);
    this.partTwo(inputs);
  }

  private partOne(inputs: any) {
    let items = inputs.split('\r\n')
      .map(i => new Rucksack(i).getValue())
      .reduce((acc, cur) => acc + cur, 0);
    this.logPartOne(items);
  }

  private partTwo(inputs: any) {
    this.logPartTwo('Unsolved');
  }

  toString(): string {
    return 'Day 3';
  }
}