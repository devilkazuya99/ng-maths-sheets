import { Component } from '@angular/core';
import { QuestionSheetComponent } from '../pages/question-sheet.component';
import { Symbol } from '../utils/constants'

@Component({
  selector: 'app-multiply-page',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class MultiplyPageComponent extends QuestionSheetComponent {

  constructor() {
    super(Symbol.MULTIPLY);
  }
}
