import { Component, OnInit } from '@angular/core';
import { Snake } from './models/snake.model';
import { SnakeGame } from './models/snake-game.model';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {
  snake: Snake;
  game: SnakeGame;
  started: boolean;

  constructor() {
    this.snake = new Snake(400, 240, 3);
    this.game = new SnakeGame(800, 500, 0, 2, this.snake);
    this.started = false;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const w = this.game.boardWidth,
          h = this.game.boardHeight;

    switch (event.key) {
      case 's':
        if (this.snake.direction !== 2) {
          this.snake.direction = 1;
        }
        break;
      case 'w':
        if (this.snake.direction !== 1) {
          this.snake.direction = 2;
        }
        break;
      case 'a':
        if (this.snake.direction !== 4) {
          this.snake.direction = 3;
        }
        break;
      case 'd':
        if (this.snake.direction !== 3) {
          this.snake.direction = 4;
        }
        break;
    }
  }

  startGame(): void {
    if (!this.started) {
      console.log('game starting...');
      this.started = true;

      if (this.started) {
        startMoving(this);
      }
    }


    function startMoving(game) {
      if (game.started) {
        setTimeout(function () {
          game.moveSnake(game.snake.direction);
          startMoving(game);
        }, 500 / game.game.speed);
      }
    }
  }

  stopGame(): void {
    this.started = false;
  }

  // moves the snake in direction
  moveSnake(direction: number) {
    const w = this.game.boardWidth,
          h = this.game.boardHeight;

    switch (direction) {
      case 1:
        if (this.snake.positionY !== (h - 20)) {
          this.snake.moveDown();
        }
        break;
      case 2:
        if (this.snake.positionY !== 0) {
          this.snake.moveUp();
        }
        break;
      case 3:
        if (this.snake.positionX !== 0) {
          this.snake.moveLeft();
        }
        break;
      case 4:
        if (this.snake.positionX !== (w - 20)) {
          this.snake.moveRight();
        }
        break;
    }
  }

  ngOnInit() {
  }
}
