import { Instruction } from "./instruction";
import { Position } from "./position";
import _ from 'lodash';

export class Rope {
  private knots: Position[] = [];
  private readonly previousTailPositions = {};

  constructor(knotCount: number) {
    Array(knotCount).fill(0).forEach(_ => this.knots.push(new Position(0, 0)));
    this.trackTailPosition();
  }

  public processInstruction(instruction: Instruction) {
    Array(instruction.distance).fill(0).forEach(instructionIndex => {
      this.knots[0] = this.knots[0].move(instruction.direction);
      _.range(1, this.knots.length).forEach((i: number) =>
        this.knots[i] = this.knots[i - 1].chase(this.knots[i]));
      this.trackTailPosition();
    });
  }

  public getPreviousTailPositions(): Set<Position> {
    return new Set(Object.values(this.previousTailPositions));
  }

  private trackTailPosition(): void {
    this.previousTailPositions[this.tail().toIndex()] = this.tail();
  }

  private tail(): Position {
    return this.knots[this.knots.length - 1];
  }
}