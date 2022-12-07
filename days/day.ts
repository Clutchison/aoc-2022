import fs from 'fs';

export abstract class Day {

  inputPath: string;

  constructor(inputPath: string) {
    this.inputPath = inputPath;
  }

  abstract run(): void;

  protected getInput(): any {
    try {
      return fs.readFileSync(this.inputPath, 'utf8');
    } catch (err) {
      console.error(err);
    }
  }

  protected logPartOne(s: any): void {
    this.log(s, '1');
  }

  protected logPartTwo(s: any): void {
    this.log(s, '2');
  }

  private log(s: any, part: string): void {
    console.log('Part ' + part + ' - ' + s);
  }
}

const { DayOne } = require('./dayOne/dayOne');
const { DayTwo } = require('./dayTwo/dayTwo');
const { DayThree } = require('./dayThree/dayThree');

export const days = [
  new DayOne('./days/dayOne/input.txt'),
  new DayTwo('./days/dayTwo/input.txt'),
  new DayThree('./days/dayThree/input.txt'),
];