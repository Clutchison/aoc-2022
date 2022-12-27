import _ from 'lodash';

export class Screen {

  readonly width: number;
  private spriteIndex: number = 0;
  private cursor: number = 0;
  private image: string = '\n';

  constructor(width: number = 40) {
    this.width = width;
  }

  public moveSprite(newIndex: number) {
    if (newIndex < -1 || newIndex > this.width)
      throw new Error("Can't move sprite, off the page: " + newIndex);
    this.spriteIndex = newIndex;
  }

  public draw() {
    this.image = this.image + this.newPixel();
    this.advanceCursor();
    if (this.cursor === 0) this.image = this.image + '\n';
  }

  public print = () => this.image;

  private advanceCursor = (): void => {
    this.cursor = (this.cursor + 1) % this.width;
  }

  private newPixel = () =>
    _.range(this.spriteIndex - 1, this.spriteIndex + 2)
      .find((r: number) => r === this.cursor) ? PIXEL.LIT : PIXEL.DARK;
}

enum PIXEL {
  LIT = '#',
  DARK = '.'
}