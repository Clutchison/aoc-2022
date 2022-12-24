import { Direction } from "./direction";

export class Position {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public toIndex(): string {
    return this.x + ',' + this.y;
  }

  public move(direction: Direction): Position {
    switch (direction) {
      case Direction.U:
        return new Position(this.x, this.y - 1)
      case Direction.D:
        return new Position(this.x, this.y + 1)
      case Direction.R:
        return new Position(this.x + 1, this.y)
      case Direction.L:
        return new Position(this.x - 1, this.y)
      default:
        return this;
    }
  }

  public chase(tailPosition: Position): Position {
    let differences = this.compare(tailPosition);
    switch (differences.reduce((acc, cur) => acc + Math.abs(cur), 0)) {
      case 0:
      case 1:
        return tailPosition;
      case 2:
        if (Math.abs(differences[0]) === Math.abs(differences[1])) return tailPosition;
        if (Math.abs(differences[0]) === 2) return tailPosition.move(differences[0] > 0 ? Direction.R : Direction.L)
        else return tailPosition.move(differences[1] > 0 ? Direction.D : Direction.U);
      case 3:
        if (differences.filter(d => Math.abs(d) > 3).length > 0)
          throw new Error("Move is too far" + JSON.stringify(differences));
        return tailPosition
          .move(differences[0] > 0 ? Direction.R : Direction.L)
          .move(differences[1] > 0 ? Direction.D : Direction.U);
      default:
        throw new Error("Invalid distance" + JSON.stringify(differences));
    }
  }

  private compare(p2: Position): [number, number] {
    return [this.x - p2.x, this.y - p2.y]
  }
}