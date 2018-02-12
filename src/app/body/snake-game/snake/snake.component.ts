import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  @Input() posX: number;
  @Input() posY: number;

  constructor() { }

  ngOnInit() {
  }

}
