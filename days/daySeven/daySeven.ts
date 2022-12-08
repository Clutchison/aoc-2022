import { Day } from "../day";
import { Directory } from "./model/directory";
import { Terminal } from "./model/terminal";

export class DaySeven extends Day {
  run(): void {
    let inputs = super.getInput();
    let terminal = new Terminal();
    terminal.run(inputs);
    let bigDirs = terminal.root.getAllDirectoriesSmallerThan(100000)
    console.log(bigDirs.map(dir => dir.size())
      .reduce((acc, cur) => acc + cur, 0));

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