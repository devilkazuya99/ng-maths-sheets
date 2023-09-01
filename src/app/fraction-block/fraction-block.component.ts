import { Component, OnInit, Input } from '@angular/core';
import { Symbol } from '../utils/constants';
import * as MathUtils from '../utils/math.utils';

@Component({
  selector: 'fraction-block',
  templateUrl: './fraction-block.component.html',
  styleUrls: ['./fraction-block.component.css']
})
export class FractionBlockComponent implements OnInit {
  @Input() no: number = 0;
  @Input() symbol = "+";
  a1: number = 0;
  a2: number = 0;
  a3: number = 0;
  b1: number = 0;
  b2: number = 0;
  b3: number = 0;
  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  showAnswer = false;

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
  generateForDevide() {
    this.generateForPlus();
  }
  generateForMultiply() {
    this.generateForPlus();
  }
  generateForMinus() {
    const n1 = MathUtils.getRandomInt(3, 7);
    let n2 = MathUtils.getRandomInt(n1, 9);
    if (n2 == n1) {
      n2 += 1;
    }
    let n3 = MathUtils.getRandomInt(1, 5);
    let n4 = MathUtils.getRandomInt(n3, 9);

    function leftIsSmaller(lF: number[], rF: any[]): boolean {
      return (lF[0]/lF[1]) <= (rF[0]/rF[1]);
    }
    while (leftIsSmaller([n1, n2], [n3, n4]) || (n2 == n4)) {
      n3 = MathUtils.getRandomInt(1, 5);
      n4 = MathUtils.getRandomInt(n3, 9);  
    }

    this.a2 = n1;
    this.a3 = n2;
    this.b2 = n3;
    this.b3 = n4;
  }
  generateForPlus() {
    const n1 = MathUtils.getRandomInt(1, 5);
    let n2 = MathUtils.getRandomInt(n1, 9);
    if (n2 == n1) {
      n2 += 1;
    }
    const n3 = MathUtils.getRandomInt(1, 5);
    let n4 = MathUtils.getRandomInt(n3, 9);
    if (n4 == n3) {
      n4 += 1;
    }
    if (n2 == n4) {
      n4 += 1;
    }

    this.a2 = n1;
    this.a3 = n2;
    this.b2 = n3;
    this.b3 = n4;
  }
}


