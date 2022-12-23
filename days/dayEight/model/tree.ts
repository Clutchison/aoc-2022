export class Tree {
  readonly row: number;
  readonly column: number;
  readonly height: number;
  scenicScore: number;

  constructor(row: number, column: number, height: number) {
    this.row = row;
    this.column = column
    this.height = height;
    this.scenicScore = 0;
  }
}