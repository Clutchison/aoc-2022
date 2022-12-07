import { RESULT } from "../result";
import { Choice } from "./choice";
import { Paper } from "./paper";
import { Scissors } from "./scissors";

export class Rock extends Choice {
  private static ROCK: Rock;

  private constructor() {
    super();
  }

  public value(): number {
    return 1;
  }
  public to(result: RESULT): Choice {
    if (result === RESULT.DRAW) return this;
    else if (result === RESULT.WIN) return Paper.getInstance();
    else return Scissors.getInstance();
  }
  public versus(choice: Choice): RESULT {
    if (choice == this) return RESULT.DRAW;
    else if (choice == Scissors.getInstance()) return RESULT.WIN;
    else return RESULT.LOSE;
  }
  public static getInstance(): Rock {
    if (!Rock.ROCK) Rock.ROCK = new Rock();
    return Rock.ROCK;
  }
}