import { Component } from '@angular/core';
import { Symbol } from '../utils/constants';

@Component({
  selector: 'app-fraction-divide-page',
  templateUrl: './fraction-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class FractionDividePageComponent {
  questions: Array<number> = [];
  symbol = Symbol.DIVIDE;
  size: number = 80;

  constructor() {
      for (let index = 0; index < this.size; index++) {
          this.questions.push(index + 1);
      }
  }

}
