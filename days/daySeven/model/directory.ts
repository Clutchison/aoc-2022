import { Item } from './item';

export class Directory extends Item {

  private readonly items: {} = {}

  public add(item: Item) {
    this.items[item.name] = item;
  }

  public remove(item: Item) {
    delete this.items[item.name];
  }

  public get(name: string) {
    return this.items[name];
  }

  public size(): number {
    return [...Object.values(this.items)]
      .map(i => (i as Item).size()).reduce((acc, cur) => acc + cur, 0);
  }

  public getDirsMatching(fn: Function): Directory[] {
    let dirs = [...Object.values(this.items)]
      .filter(item => item instanceof Directory)
      .map(item => item as Directory);
    return [...dirs.filter(dir => fn(dir)),
    ...dirs.flatMap(dir => dir.getDirsMatching(fn))];
  }
}