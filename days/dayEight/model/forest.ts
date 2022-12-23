import { Tree } from "./tree";
import { Checker, TreeBlocksViewChecker, BoolCheck, VisibleFromEdgeChecker } from "./checker";

export class Forest {

  private readonly trees: Tree[][]; // [row][column]

  constructor(input: string) {
    const rows = input.split('\r\n');
    this.trees = Array(rows.length).fill(0).map((_, row) =>
      Array(rows[row].length).fill(0).map((_, column) =>
        new Tree(row, column, Number.parseInt(rows[row].charAt(column)))));
  }

  public readonly getVisibleTrees = () => {
    let topDown = this.trees[0].map(tree =>
      this.findVisibleTreesInLine(tree, 1, 0, new VisibleFromEdgeChecker()));
    let bottomUp = this.trees[this.trees.length - 1].map(tree =>
      this.findVisibleTreesInLine(tree, -1, 0, new VisibleFromEdgeChecker()));
    let leftRight = this.getTreeColumn(0).map(tree =>
      this.findVisibleTreesInLine(tree, 0, 1, new VisibleFromEdgeChecker()))
    let rightLeft = this.getTreeColumn(this.trees[0].length - 1).map(tree =>
      this.findVisibleTreesInLine(tree, 0, -1, new VisibleFromEdgeChecker()))

    return new Set([
      ...Forest.mergeArrayOfSets(topDown),
      ...Forest.mergeArrayOfSets(bottomUp),
      ...Forest.mergeArrayOfSets(leftRight),
      ...Forest.mergeArrayOfSets(rightLeft),
    ])
  };

  public readonly getScenicScores = () => {
    return this.trees.flatMap(row => row.map(tree => {
      if (tree.row === 0 ||
        tree.row === this.trees.length - 1 ||
        tree.column === 0 ||
        tree.column === this.trees[tree.row].length - 1) {
        return tree;
      }

      let downTree = this.trees[tree.row + 1][tree.column];
      let upTree = this.trees[tree.row - 1][tree.column];
      let rightTree = this.trees[tree.row][tree.column + 1];
      let leftTree = this.trees[tree.row][tree.column - 1];

      let down = this.findVisibleTreesInLine(downTree, 1, 0, BoolCheck.getInstance(true),
        new TreeBlocksViewChecker(tree.height)).size;
      let up = this.findVisibleTreesInLine(upTree, -1, 0, BoolCheck.getInstance(true),
        new TreeBlocksViewChecker(tree.height)).size;
      let right = this.findVisibleTreesInLine(rightTree, 0, 1, BoolCheck.getInstance(true),
        new TreeBlocksViewChecker(tree.height)).size;
      let left = this.findVisibleTreesInLine(leftTree, 0, -1, BoolCheck.getInstance(true),
        new TreeBlocksViewChecker(tree.height)).size;
      let score = down * up * right * left;
      tree.scenicScore = score;
      return tree;
    }));
  }

  private static mergeArrayOfSets = (array: Set<Object>[]) =>
    array.reduce((set1, set2) => new Set([...set1, ...set2]), new Set());

  private getTreeColumn = (index: number) => this.trees.map(row => row[index]);

  private findVisibleTreesInLine = (tree: Tree,
    rowIncrement: number,
    columnIncrement: number,
    treeCheck: Checker,
    stopCheck: Checker = BoolCheck.getInstance(false),
    visibleTrees: Set<Tree> = new Set()) => {

    // Check if tree counts
    if (treeCheck.check(tree.height)) visibleTrees.add(tree);

    // Check if should continue
    if (stopCheck.check(tree.height)) return visibleTrees;

    // Get next tree
    const nextRow = tree.row + rowIncrement;
    const nextColumn = tree.column + columnIncrement;
    const nextTree = this.trees[nextRow] ? this.trees[nextRow][nextColumn] : undefined;

    // Check if tree exists
    return nextTree ?
      this.findVisibleTreesInLine(nextTree,
        rowIncrement,
        columnIncrement,
        treeCheck,
        stopCheck,
        visibleTrees) :
      visibleTrees;
  }
}