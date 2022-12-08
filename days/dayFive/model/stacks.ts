import _ from 'lodash';
import { Instruction } from './instruction';

export class Stacks {
  private readonly stacks: string[][];

  constructor(s: string[]) {
    let stackCount = (s[s.length - 1].length + 1) / 4;
    this.stacks = Array(stackCount).fill(0).map(_ => []);
    s.reverse().slice(1).forEach(line => {
      _.range(1, 4 * (stackCount - 1) + 2, 4).forEach((index: number) => {
        if (line.charAt(index) !== ' ')
          this.stacks[(index - 1) / 4].push(line.charAt(index))
      })
    });
  }

  public perform(instruction: Instruction, moveSimultaneous = false): void {
    if (moveSimultaneous) {
      this.move(instruction.from, instruction.to, instruction.count)
    } else {
      Array(instruction.count).fill(0).forEach(_ => this.move(instruction.from, instruction.to))
    }
  }

  public move(from: number, to: number, count = 1): void {
    let cratesToMove = Array(count).fill(0).map(_ => this.stacks[from].pop()).reverse();
    cratesToMove.forEach(crate => this.stacks[to].push(crate || ''));
  }

  public getTopItems(): string {
    return this.stacks.map(stack => stack[stack.length - 1]).join('');
  }
}