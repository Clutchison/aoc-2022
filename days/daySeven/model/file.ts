import { Directory } from './directory';
import { Item } from './item';

export class File extends Item {
  private readonly fileSize: number;

  constructor(name: string, dir: Directory, size: number) {
    super(name, dir);
    this.fileSize = size;
  }

  public size(): number {
    return this.fileSize;
  }

  public toString(): string {
    return this.fileSize + ' ' + this.name;
  }
}