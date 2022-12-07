import { RESULT } from "../result";
import { Choice } from "./choice";
import { Paper } from "./paper";
import { Rock } from "./rock";

export class Scissors extends Choice {
  private static SCISSORS: Scissors;

  public value(): number {
    return 3;
  }
  public to(result: RESULT): Choice {
    if (result === RESULT.DRAW) return this;
    else if (result === RESULT.WIN) return Rock.getInstance();
    else return Paper.getInstance();
  }
  public versus(choice: Choice): RESULT {
    if (choice == this) return RESULT.DRAW;
    else if (choice == Paper.getInstance()) return RESULT.WIN;
    else return RESULT.LOSE;
  }
  public static getInstance(): Scissors {
    if (!Scissors.SCISSORS) Scissors.SCISSORS = new Scissors();
    return Scissors.SCISSORS;
  }
}