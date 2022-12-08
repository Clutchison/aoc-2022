import { Day } from "../day";

export class DaySix extends Day {
  run(): void {
    let inputs = super.getInput();

    this.partOne(inputs);
    this.partTwo(inputs)
  }

  private partOne(inputs: string) {
    this.logPartOne(DaySix.findMarker(inputs, 4));
  }

  private partTwo(inputs: string) {
    this.logPartOne(DaySix.findMarker(inputs, 14));
  }

  private static findMarker(inputs: string, markerSize: number) {
    return [...inputs.split('')]
      .findIndex((_, i) =>
        new Set([...inputs.slice(i, i + markerSize)]).size === markerSize) + markerSize;
  }

  toString(): string {
    return 'Day 6';
  }
}