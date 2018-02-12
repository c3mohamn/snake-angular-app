export class Snake {
  constructor (
    public positionX: number,
    public positionY: number,
    public tail: Snake = null
  ) { }
}
