import { INSTRUCTION_TYPE, Instruction } from "./instruction";

export class AddX implements Instruction {
  readonly type: string = INSTRUCTION_TYPE.ADDX;
  readonly cycles: number = 2;
  readonly x: number;
  constructor(x: number) {
    this.x = x;
  }

  run(regValue: number): number {
    return regValue + this.x;
  }
}