import { Day } from "../day";
import { MonkeyCircle } from "./model/monkey-circle";

export class DayEleven extends Day {
  run(): void {
    let input = super.getInput().split('\r\n');
    this.partOne(input);
    this.partTwo(input);
  }

  private partOne(input: string[]) {
    let circle = new MonkeyCircle(input, 3);
    circle.rounds(20);
    this.logPartOne(circle.monkeyBusiness());
  }

  private partTwo(input: string[]) {
    let circle = new MonkeyCircle(input, 1);
    circle.rounds(10000);
    this.logPartTwo(circle.monkeyBusiness());
  }

  toString(): string {
    return 'Day 11';
  }
}