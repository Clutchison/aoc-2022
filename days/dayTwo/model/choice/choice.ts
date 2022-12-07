import { RESULT } from '../result';

export abstract class Choice {
  public abstract to(result: RESULT): Choice;
  public abstract versus(choice: Choice): RESULT;
  public abstract value(): number;

}
