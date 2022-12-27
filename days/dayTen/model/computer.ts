import { Instruction } from "./instruction/instruction";
import { Screen } from "./screen";

export class Computer {
  private cycle: number = 0;
  private testResult: number = 0;
  private register: number = 1;
  private screen: Screen = new Screen();

  private static readonly countCycles = [20, 60, 100, 140, 180, 220];

  public process = (instructions: Instruction[]): void =>
    instructions.forEach(instruction => this.runInstruction(instruction));

  public getTestResult = (): number => this.testResult;

  public printScreen = (): string => this.screen.print();

  private runInstruction(instruction: Instruction) {
    Array(instruction.cycles).fill(0).forEach(_ => this.advanceCycle());
    this.register = instruction.run(this.register);
    console.log(this.register);
    this.screen.moveSprite(this.register);
  }

  private advanceCycle(): void {
    this.cycle = this.cycle + 1;
    let countCycle = Computer.countCycles.find(cyc => this.cycle === cyc);
    if (countCycle) this.testResult = this.testResult + (this.register * countCycle);
    this.screen.draw();
  }
}