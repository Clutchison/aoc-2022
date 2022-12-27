import { INSTRUCTION_TYPE, Instruction } from "./instruction";

export class Noop implements Instruction {
  readonly type: string = INSTRUCTION_TYPE.NOOP;
  readonly cycles: number = 1;
  run(regValue: number): number { return regValue }
}