import { Day1 } from "./day1";

export interface Day {
  run(): void;
}

export const days = [
  new Day1(),
]