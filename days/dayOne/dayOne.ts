import { Day } from "../day";

export class DayOne extends Day {
  run(): void {
    let inputs = super.getInput() // Get Input
      ?.split('\r\n\r\n') // Split by empty lines
      .map((calList: string) => calList
        .split('\r\n') // Split by newLine
        .map(s => parseInt(s)) // Parse to Ints
        .reduce((acc, cur) => acc + cur, 0)); // Sum groups

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: number[]) {
    this.logPartOne(Math.max(...inputs));
  }

  private partTwo(inputs: number[]) {
    let sortedInputs = [...inputs];
    sortedInputs.sort((n1, n2) => n1 > n2 ? -1 : 1);
    this.logPartTwo(sortedInputs.slice(0, 3).reduce((acc, cur) => acc + cur, 0));
  }

  toString(): string {
    return 'Day 1';
  }
}