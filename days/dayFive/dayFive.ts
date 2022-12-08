import { Day } from "../day";
import { Instruction } from "./model/instruction";
import { Stacks } from "./model/stacks";

export class DayFive extends Day {
  run(): void {
    let inputs = super.getInput().split('\r\n\r\n');

    this.partOne([...inputs]);
    this.partTwo([...inputs])
  }

  private partOne(inputs: string[]) {
    let stacks = new Stacks(inputs[0].split('\r\n'));
    let instructions = inputs[1]
      .split('\r\n')
      .map(line => new Instruction(line));
    instructions.forEach(instruction => stacks.perform(instruction));
    this.logPartOne(stacks.getTopItems());
  }

  private partTwo(inputs: string[]) {
    let stacks = new Stacks(inputs[0].split('\r\n'));
    let instructions = inputs[1]
      .split('\r\n')
      .map(line => new Instruction(line));
    instructions.forEach(instruction => stacks.perform(instruction, true));
    this.logPartTwo(stacks.getTopItems());
  }

  toString(): string {
    return 'Day 5';
  }
}