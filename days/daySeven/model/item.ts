import { Directory } from "./directory";

export abstract class Item {
  private directory?: Directory;
  public readonly name: string;

  constructor(name: string, dir?: Directory) {
    this.name = name;
    this.directory = dir;
  }

  public getParent(): Directory | undefined {
    return this.directory;
  }

  abstract size(): number;
}