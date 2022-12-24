import { Day } from "../day";
import { Instruction } from "./model/instruction";
import { Rope } from "./model/rope";
import { Position } from "./model/position";

export class DayNine extends Day {
  run(): void {
    let input = super.getInput().split('\r\n');
    let instructions = Array(input.length).fill(0)
      .map((_, index) => new Instruction(input[index].trim(), index))
    let rope = new Rope();
    this.partOne(instructions, rope);
    this.partTwo()
  }

  private partOne(instructions: Instruction[], rope: Rope) {
    instructions.forEach(i => rope.processInstruction(i));
    this.logPartOne(rope.getPreviousTailPositions().size);
  }

  private partTwo() {
    this.logPartTwo("Not Implemented");
  }

  toString(): string {
    return 'Day 8';
  }
}