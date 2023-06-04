import { Component } from '@angular/core';
import { QuestionSheetComponent } from './question-sheet.component';
import { Symbol } from '../utils/constants'


@Component({
  selector: 'app-divide-page',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class DividePageComponent extends QuestionSheetComponent {

  constructor() {
    super(Symbol.DIVIDE);
  }
}
