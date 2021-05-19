import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
})
export class OddComponent implements OnInit {
  @Input() oddNumbers: number[];
  constructor() {
    this.oddNumbers = new Array<number>();
  }

  ngOnInit(): void {}
}
