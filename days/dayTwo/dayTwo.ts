import { Day } from "../day";
import { Choice } from "./model/choice/choice";
import { Paper } from "./model/choice/paper";
import { Rock } from "./model/choice/rock";
import { Scissors } from "./model/choice/scissors";
import { RESULT } from "./model/result";

const sum = ((acc, cur) => acc + cur);

export class DayTwo extends Day {
  run(): void {
    let inputs = super.getInput() // Get Input
      .split('\r\n')
      .map((line: string) => line.split(' '));

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: string[][]): void {
    let score = inputs
      .map((throws: string[]) => this.play(this.choiceFromString(throws[0]), this.choiceFromString(throws[1])))
      .reduce((acc, cur) => acc + cur, 0);
    this.logPartOne(score);
  }

  private partTwo(inputs: string[][]): void {
    let score = inputs
      .map((throws: string[]) => this.cheat(this.choiceFromString(throws[0]), this.resultFromString(throws[1])))
      .reduce(sum, 0)
    this.logPartTwo(score);
  }

  private cheat(opp: Choice, result: RESULT): number {
    let winsAgainst = opp.to(result);
    return result + winsAgainst.value();
  }

  private play(opp: Choice, you: Choice): number {
    let result = you.versus(opp);
    return you.value() + result;
  }

  private choiceMap = {
    'A': Rock.getInstance(),
    'X': Rock.getInstance(),
    'B': Paper.getInstance(),
    'Y': Paper.getInstance(),
    'C': Scissors.getInstance(),
    'Z': Scissors.getInstance()
  }

  private choiceFromString(s: string): Choice {
    let choice = this.choiceMap[s];
    if (!choice) throw new Error("Bad Choice string: " + s);
    return choice;
  }

  private resultMap = {
    'X': RESULT.LOSE,
    'Y': RESULT.DRAW,
    'Z': RESULT.WIN
  }

  private resultFromString(s: string): RESULT {
    let result = this.resultMap[s];
    if (result === undefined) throw new Error("Bad Choice string: " + s);
    return result;
  }

  toString(): string {
    return 'Day 2';
  }
}
/*
A X => Lose with C == 3
A Y => Tie with A == 4
A Z => Win with B == 8
B X => Lose with A == 1



*/