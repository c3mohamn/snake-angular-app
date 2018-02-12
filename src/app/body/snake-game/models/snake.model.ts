export class Snake {
  constructor (
    public positionX: number,
    public positionY: number,
    public direction: number = 1,
    public tail: Snake = null
  ) { }

  moveLeft() {
    this.positionX -= 20;
  }

  moveRight() {
    this.positionX += 20;
  }

  moveUp() {
    this.positionY -= 20;
  }

  moveDown() {
    this.positionY += 20;
  }
}
