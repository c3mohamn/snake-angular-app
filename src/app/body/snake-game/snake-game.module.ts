import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeGameComponent } from './snake-game.component';
import { SnakeComponent } from './snake/snake.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: SnakeGameComponent}]),
    CommonModule
  ],
  declarations: [SnakeGameComponent, SnakeComponent]
})
export class SnakeGameModule { }
