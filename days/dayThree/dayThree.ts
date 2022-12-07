import { Day } from "../day";
import { Rucksack } from "./rucksack";

export class DayThree extends Day {
  run(): void {
    let inputs = super.getInput().split('\r\n');
    this.partOne(inputs);
    this.partTwo(inputs);
  }

  private partOne(inputs: string[]) {
    let items = inputs
      .map(i => new Rucksack(i).getValue())
      .reduce((acc, cur) => acc + cur, 0);
    this.logPartOne(items);
  }

  private partTwo(inputs: string[]) {
    let groups: string[][] = Array(inputs.length / 3).fill(0).map(_ => []);
    Array(inputs.length).fill(0).map((_, i) => groups[Math.floor(i / 3)].push(inputs[i]));
    let sum = groups.map(g => Rucksack.findBadgeValue(g.map(line => new Rucksack(line))))
      .reduce((acc, cur) => acc + cur, 0);
    this.logPartTwo(sum);
  }

  toString(): string {
    return 'Day 3';
  }
}