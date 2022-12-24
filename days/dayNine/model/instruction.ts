import { Direction } from "./direction";

export class Instruction {

  direction: Direction;
  distance: number;
  instructionNumber: number;

  private static pattern = '^[UDLR]{1} [0-9]{1,2}$'

  constructor(s: string, number: number) {
    if (!s.match(Instruction.pattern)) throw new Error('Bad Instruction String: ' + s);
    let split = s.split(' ');
    this.direction = Direction[split[0] as keyof typeof Direction];
    this.distance = Number.parseInt(split[1]);
    this.instructionNumber = number;
  }
}