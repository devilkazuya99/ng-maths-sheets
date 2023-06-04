import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleShowAnswer } from './state/application.actions';
import { ApplicationState } from './state/application.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showAnswer: boolean = false;
  showAnswer$: Observable<boolean>;

  constructor(private store: Store) {
    this.showAnswer$ = this.store.select(store => store.applicationState.showAnswer);
    this.showAnswer$.subscribe(value => this.showAnswer = value);
  }
  
  ngOnInit(): void {
    // this.showAnswer$.subscribe(value => console.log('OnInit()',value));
  }
  
  toggleShowAnswer() {
    this.store.dispatch(new ToggleShowAnswer());
  }
}
