export class VisibleFromEdgeChecker implements Checker {
  private previousHeight = -1;

  public check = (newHeight: number) => {
    if (newHeight > this.previousHeight) {
      this.previousHeight = newHeight;
      return true;
    } else {
      return false;
    }
  }
}

export class TreeBlocksViewChecker implements Checker {
  private readonly treeHeight: number;
  public constructor(treeHeight: number) {
    this.treeHeight = treeHeight;
  }
  check(newHeight: number): boolean {
    return newHeight >= this.treeHeight
  }
}

export class BoolCheck implements Checker {

  private static instances = {};
  private returnValue: boolean;

  private constructor(returnValue: boolean) {
    this.returnValue = returnValue;

  }

  public static getInstance(returnValue: boolean): BoolCheck {
    if (!BoolCheck.instances[returnValue.toString()]) {
      BoolCheck.instances[returnValue.toString()] = new BoolCheck(returnValue);
    }
    return BoolCheck.instances[returnValue.toString()];
  }

  check(): boolean {
    return this.returnValue;
  }
}

export interface Checker {
  check(newHeight: number): boolean;
}


