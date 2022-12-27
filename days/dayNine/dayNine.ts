import { Day } from "../day";
import { Instruction } from "./model/instruction";
import { Rope } from "./model/rope";

export class DayNine extends Day {
  run(): void {
    let instructions = super.getInput().split('\r\n')
      .map((s: string) => new Instruction(s.trim()))
    this.partOne(instructions);
    this.partTwo(instructions)
  }

  private partOne(instructions: Instruction[]) {
    let rope = new Rope(2);
    instructions.forEach(i => rope.processInstruction(i));
    this.logPartOne(rope.getPreviousTailPositions().size);
  }

  private partTwo(instructions: Instruction[]) {
    let rope = new Rope(10);
    instructions.forEach(i => rope.processInstruction(i));
    this.logPartTwo(rope.getPreviousTailPositions().size);
  }

  toString(): string {
    return 'Day 8';
  }
}