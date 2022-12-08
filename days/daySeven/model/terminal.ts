import { Directory } from "./directory";
import { File } from "./file";

export class Terminal {
  public readonly root: Directory;
  private working: Directory;

  private commands = {
    cd: this.cd,
    ls: this.ls,
  };

  constructor() {
    this.root = new Directory('/');
    this.working = this.root;
  }

  public run(input: string) {
    let self = this;
    Terminal.sanitizeInput(input).forEach(input => {
      let command = this.commands[input[0].split(' ')[0]];;
      if (command) command(self, ...input);
    });
  }

  private cd(self: Terminal, ...cdArr: string[]) {
    let dirName = cdArr[0].split(' ')[1];
    if (dirName === '..') self.working = self.working.getParent() || self.root;
    else if (dirName === '/') self.working = self.root;
    else self.working = self.working.get(dirName);
  }

  private ls(self: Terminal, ...lsArr: string[]) {
    lsArr.slice(1).forEach(itemInfo => {
      let [itemMeta, itemName] = itemInfo.split(' ');
      let newItem = itemMeta === 'dir' ?
        new Directory(itemName, self.working) :
        new File(itemName, self.working, Number.parseInt(itemMeta));
      self.working.add(newItem);
    });
  }

  private static sanitizeInput(input: string) {
    return input.split('$').map(input => input.split('\r\n'))
      .map(arr => arr.map(s => s.trim()).filter(s => s !== ''))
      .filter(arr => !(arr.length === 0));
  }
}