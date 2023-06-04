import { Component, Input, OnInit } from '@angular/core';
import * as MathUtils from '../utils/math.utils';
import { Symbol } from '../utils/constants';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css']
})
export class QuestionBlockComponent implements OnInit {
  @Input() no: number = 0;
  @Input() symbol = "-";
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  showAnswer: boolean = false;
  showAnswer$: Observable<boolean> | undefined;

  constructor(private store: Store) {
    this.showAnswer$ = this.store.select(store => store.applicationState.showAnswer);
    this.showAnswer$.subscribe(value => this.showAnswer = value);
  }

  ngOnInit(): void {
    if (this.symbol === Symbol.PLUS) {
      this.generateForPlus();
    } else
      if (this.symbol === Symbol.MINUS) {
        this.generateForMinus();
      } else
        if (this.symbol === Symbol.MULTIPLY) {
          this.generateForMultiply();
        } else
          if (this.symbol === Symbol.DIVIDE) {
            this.generateForDevide();
          }
  }

  generateForPlus() {
    const max = Math.pow(10, (Math.ceil(this.no / 25) + 1));
    const min = max / 4;
    const n1 = MathUtils.getRandomInt(min, max);
    let n2 = MathUtils.getRandomInt(min, max);
    while (n2 > n1) {
      n2 = MathUtils.getRandomInt(min, max);
    }
    this.num1 = n1;
    this.num2 = n2;
    this.num3 = n1 + n2;
  }
  generateForMinus() {
    const max = Math.pow(10, (Math.ceil(this.no / 30) + 1));
    const min = max / 4;
    const n1 = MathUtils.getRandomInt(min, max);
    let n2 = MathUtils.getRandomInt(min, max);
    while (n2 > n1) {
      n2 = MathUtils.getRandomInt(min, max);
    }
    this.num1 = n1;
    this.num2 = n2;
    this.num3 = n1 - n2;
  }
  generateForMultiply() {
    const max = Math.pow(10, (Math.ceil(this.no / 35) + 1));
    const min = max / 4;
    const n1 = MathUtils.getRandomInt(min, max);
    let n2 = this.no > 50 ? MathUtils.getRandomInt(11, 19) : MathUtils.getRandomInt(2, 9);
    this.num1 = n1;
    this.num2 = n2;
    this.num3 = n1 * n2;
  }
  generateForDevide() {
    const max = Math.pow(10, (Math.ceil(this.no / 50) + 1));
    const min = max / 4;
    const n1 = MathUtils.getRandomInt(min, max);
    let n2 = MathUtils.getRandomInt(3, 12);
    this.num1 = n1 * n2;
    this.num2 = n2;
    this.num3 = n1;
  }

}
