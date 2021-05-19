import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bindingsApp';

  oddIncrement: number[];
  evenIncrement: number[];

  constructor() {
    this.oddIncrement = new Array<number>();
    this.evenIncrement = new Array<number>();
  }

  saveIncrement(increment) {
    increment % 2 === 0
      ? this.oddIncrement.push(increment)
      : this.evenIncrement.push(increment);
  }
}
