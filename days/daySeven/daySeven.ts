import { Day } from "../day";
import { Directory } from "./model/directory";
import { Terminal } from "./model/terminal";

export class DaySeven extends Day {
  run(): void {
    let terminal = new Terminal();
    terminal.run(super.getInput());

    this.partOne(terminal);
    this.partTwo(terminal)
  }

  private partOne(terminal: Terminal) {
    let bigDirs = terminal.root
      .getDirsMatching((dir: Directory) => dir.size() <= 100000)
    this.logPartOne(bigDirs.map(dir => dir.size())
      .reduce((acc, cur) => acc + cur, 0));
  }

  private partTwo(terminal: Terminal) {
    let freeSpace = 70000000 - terminal.root.size();
    let spaceNeeded = 30000000 - freeSpace;
    this.logPartOne(Math.min(...terminal.root
      .getDirsMatching((dir: Directory) => dir.size() >= spaceNeeded)
      .map(dir => dir.size())));
  }

  toString(): string {
    return 'Day 7';
  }
}