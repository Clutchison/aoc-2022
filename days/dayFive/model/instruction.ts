export class Instruction {

  public readonly count: number;
  public readonly from: number;
  public readonly to: number;

  private static readonly pattern = '^move [0-9]+ from [0-9]+ to [0-9]+$'

  constructor(s: string) {
    if (!s.match(Instruction.pattern)) throw new Error('Bad Instruction String: ' + s);
    let split = s.split(' ')
    this.count = Number.parseInt(split[1]);
    this.from = Number.parseInt(split[3]) - 1;
    this.to = Number.parseInt(split[5]) - 1;
  }
}