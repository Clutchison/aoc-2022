import { Day } from "../day";
import { Computer } from "./model/computer";
import { Instruction, InstructionFactory } from "./model/instruction/instruction";

export class DayTen extends Day {
  run(): void {
    let computer = new Computer();
    computer.process(super.getInput().split('\r\n')
      .map((s: string) => InstructionFactory.create(s)));
    this.partOne(computer);
    this.partTwo(computer);
  }

  private partOne(computer: Computer) {
    this.logPartOne(computer.getTestResult());
  }

  private partTwo(computer: Computer) {
    this.logPartTwo(computer.printScreen());
  }

  toString(): string {
    return 'Day 10';
  }
}