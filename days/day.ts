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
const { DayFour } = require('./dayFour/dayFour');
const { DayFive } = require('./dayFive/dayFive');
const { DaySix } = require('./daySix/daySix');
const { DaySeven } = require('./daySeven/daySeven');
const { DayEight } = require('./dayEight/dayEight');
const { DayNine } = require('./dayNine/dayNine');
const { DayTen } = require('./dayTen/dayTen');
const { DayEleven } = require('./dayEleven/dayEleven');

export const days = [
  new DayOne('./days/dayOne/input.txt'),
  new DayTwo('./days/dayTwo/input.txt'),
  new DayThree('./days/dayThree/input.txt'),
  new DayFour('./days/dayFour/input.txt'),
  new DayFive('./days/dayFive/input.txt'),
  new DaySix('./days/daySix/input.txt'),
  new DaySeven('./days/daySeven/input.txt'),
  new DayEight('./days/dayEight/input.txt'),
  new DayNine('./days/dayNine/input.txt'),
  new DayTen('./days/dayTen/input.txt'),
  new DayEleven('./days/dayEleven/input.txt'),
];