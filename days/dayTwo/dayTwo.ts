import { Day } from "../day";

enum THROW {
  A = 'A',
  X = 'X',
  B = 'B',
  Y = 'Y',
  C = 'C',
  Z = 'Z',
}

export class DayTwo extends Day {
  run(): void {
    let inputs = super.getInput(); // Get Input

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: string) {
    let score = inputs
      .split('\r\n')
      .map((line: string) => line.split(' '))
      .map((throws: string[]) => this.play(THROW[throws[0]], THROW[throws[1]]))
      .reduce((acc, cur) => acc + cur, 0);
    this.logPartOne(score);
  }

  private partTwo(inputs: number[]) {
    this.logPartTwo('Unsolved');
  }

  private play(opp: THROW, you: THROW): number {
    let oppScore = opp.charCodeAt(0) - 'A'.charCodeAt(0) + 0;
    let youScore = you.charCodeAt(0) - 'X'.charCodeAt(0) + 0;
    if (oppScore + 1 % 2 == youScore) {
      return 6 + youScore;
    } else if (youScore + 1 % 2 == oppScore) {
      return 0 + youScore;
    } else {
      return 3 + youScore;
    }
  }

  toString(): string {
    return 'Day 2';
  }
}