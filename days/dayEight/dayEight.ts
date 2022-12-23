import { Day } from "../day";
import { Forest } from "./model/forest";
import { Tree } from "./model/tree";

export class DayEight extends Day {
  run(): void {
    let forest = new Forest(super.getInput());
    this.partOne(forest);
    this.partTwo(forest)
  }

  private partOne(forest: Forest) {
    this.logPartOne(forest.getVisibleTrees().size);
  }

  private partTwo(forest: Forest) {
    this.logPartTwo(JSON.stringify(forest.getScenicScores()
    .reduce((t1, t2) => t2.scenicScore > t1.scenicScore ? t2 : t1, new Tree(0, 0, 0))));
    console.log()
  }

  toString(): string {
    return 'Day 8';
  }
}