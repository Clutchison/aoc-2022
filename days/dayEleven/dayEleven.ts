import { Day } from "../day";
import { MonkeyCircle } from "./model/monkey-circle";

export class DayEleven extends Day {
  run(): void {
    let circle = new MonkeyCircle(super.getInput().split('\r\n'));
    this.partOne(circle);
    this.partTwo();
  }

  private partOne(circle: MonkeyCircle) {
    circle.rounds(20);
    this.logPartOne(circle.monkeyBusiness());
  }

  private partTwo() {
    this.logPartTwo("Not Implemented");
  }

  toString(): string {
    return 'Day 11';
  }
}