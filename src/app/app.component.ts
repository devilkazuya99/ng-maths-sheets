import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleShowAnswer } from './state/application.actions';
// import { ApplicationState } from './state/application.state';
import { Observable } from 'rxjs';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showAnswer: boolean = false;
  showAnswer$: Observable<boolean>;
  menuItems = routes.map(r => { return { link: r.path, label: r.data ? r.data['label'] : 'Link' } }).filter(m => m.label != 'Link');

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
