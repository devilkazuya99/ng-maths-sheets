import { Component } from '@angular/core';
import { Symbol } from '../utils/constants';

@Component({
  selector: 'app-fraction-minus-page',
  templateUrl: './fraction-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class FractionMinusPageComponent {
  questions: Array<number> = [];
  symbol = Symbol.MINUS;
  size: number = 80;

  constructor() {
      for (let index = 0; index < this.size; index++) {
          this.questions.push(index + 1);
      }
  }

}
