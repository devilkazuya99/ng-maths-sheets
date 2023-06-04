import { Component } from '@angular/core';
import { QuestionSheetComponent } from '../pages/question-sheet.component';
import { Symbol } from '../utils/constants'

@Component({
  selector: 'app-plus-page',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class PlusPageComponent extends QuestionSheetComponent {

  constructor() {
    super(Symbol.PLUS);
  }
}
