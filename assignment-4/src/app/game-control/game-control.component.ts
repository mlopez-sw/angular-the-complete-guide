import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  interval: ReturnType<typeof setInterval>;
  increment: number;
  @Output() numberOfGames = new EventEmitter<number>();

  constructor() {
    this.increment = 0;
  }

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      this.numberOfGames.emit(this.increment++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
