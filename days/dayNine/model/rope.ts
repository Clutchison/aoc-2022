import { Instruction } from "./instruction";
import { Position } from "./position";

export class Rope {
  private headPosition: Position = new Position(0, 0);
  private tailPosition: Position = new Position(0, 0);
  private readonly previousTailPositions = {};

  constructor() {
    this.previousTailPositions[this.tailPosition.toIndex()] = this.tailPosition;
  }

  public processInstruction(instruction: Instruction) {
    Array(instruction.distance).fill(0).forEach(_ => {
      this.headPosition = this.headPosition.move(instruction.direction);
      try {
        this.tailPosition = this.headPosition.chase(this.tailPosition);
      } catch (error) {
        throw new Error("Error at instruction: " + instruction.instructionNumber + '\r\n' + error);
      }
      this.previousTailPositions[this.tailPosition.toIndex()] = this.tailPosition;
    });
  }

  public getPreviousTailPositions(): Set<Position> {
    return new Set(Object.values(this.previousTailPositions));
  }
}