import { Snake } from './snake.model';

export class SnakeGame {
  snakeHead: Snake;
  snakeTail: Snake;

  constructor (
    public boardWidth: number,
    public boardHeight: number,
    public points: number,
    public speed: number,
    public snake: Snake
  ) {
    this.snakeHead = snake;
    this.snakeTail = snake.tail;
  }

  // Adds a new tail to the snake
  addTail(tail: Snake) {
    this.snakeTail.tail = tail;
  }
}
