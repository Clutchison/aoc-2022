import { AddX } from "./addx";
import { Noop } from "./noop";

export const INSTRUCTION_TYPE = {
  NOOP: "noop",
  ADDX: "addx"
} as const;

type ObjectValues<T> = T[keyof T];

export type InstructionType = ObjectValues<typeof INSTRUCTION_TYPE>

export abstract class Instruction {
  readonly type: string;
  readonly cycles: number;
  abstract run(regValue: number, ...args: any[]): number;
}

export class InstructionFactory {
  static create(s: string): Instruction {
    let split = s.split(' ');
    switch (split[0]) {
      case INSTRUCTION_TYPE.NOOP:
        return new Noop();
      case INSTRUCTION_TYPE.ADDX:
        return new AddX(Number.parseInt(split[1]));
      default:
        throw new Error("Instruction not implemented: " + s);
    }
  }
}