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

  constructor() {
    this.snake = new Snake(400, 240);
    this.game = new SnakeGame(800, 500, 0, 1, this.snake);

    console.log(this.snake, this.game);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const w = this.game.boardWidth,
          h = this.game.boardHeight;

    switch (event.key) {
      case 's':
        if (this.snake.positionY !== (h - 20)) {
          this.snake.positionY += 20;
        }
        break;
      case 'w':
        if (this.snake.positionY !== 0) {
          this.snake.positionY -= 20;
        }
        break;
      case 'a':
        if (this.snake.positionX !== 0) {
          this.snake.positionX -= 20;
        }
        break;
      case 'd':
        if (this.snake.positionX !== (w - 20)) {
          this.snake.positionX += 20;
        }
        break;
    }
  }

  startGame(): void {
    console.log('game starting...');
  }

  ngOnInit() {
  }
}
