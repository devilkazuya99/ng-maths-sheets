import { Component } from '@angular/core';
import { QuestionSheetComponent } from '../pages/question-sheet.component';
import { Symbol } from '../utils/constants'

@Component({
  selector: 'app-minus-page',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class MinusPageComponent extends QuestionSheetComponent {

  constructor() {
    super(Symbol.MINUS);
  }
}
