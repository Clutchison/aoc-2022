import { RESULT } from "../result";
import { Choice } from "./choice";
import { Rock } from "./rock";
import { Scissors } from "./scissors";

export class Paper extends Choice {
  private static PAPER: Paper;

  public value(): number {
    return 2;
  }
  public to(result: RESULT): Choice {
    if (result === RESULT.DRAW) return this;
    else if (result === RESULT.WIN) return Scissors.getInstance();
    else return Rock.getInstance();
  }
  public versus(choice: Choice): RESULT {
    if (choice == this) return RESULT.DRAW;
    else if (choice == Rock.getInstance()) return RESULT.WIN;
    else return RESULT.LOSE;
  }
  public static getInstance(): Paper {
    if (!Paper.PAPER) Paper.PAPER = new Paper();
    return Paper.PAPER;
  }
}