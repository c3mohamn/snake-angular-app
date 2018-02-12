import { Component, OnInit } from '@angular/core';
import { Snake } from './models/snake.model';
import { SnakeGame } from './models/snake-game.model';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {
  snake: Snake;
  game: SnakeGame;

  constructor() {
    this.snake = new Snake(0, 0);
    this.game = new SnakeGame(0, 1, this.snake);

    console.log(this.snake, this.game);
  }

  startGame(): void {
    console.log('game starting...');
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('test');
    }, 1000);
  }
}
