import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionBlockComponent } from './question-block/question-block.component';

import { DefaultPageComponent } from './default-page/default-page.component';
import {
  DividePageComponent, 
  MinusPageComponent, 
  MultiplyPageComponent, 
  PlusPageComponent,
  FractionPlusPageComponent
} from './pages';
import { ApplicationState } from './state/application.state';
import { FractionBlockComponent } from './fraction-block/fraction-block.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBlockComponent,
    PlusPageComponent,
    MinusPageComponent,
    MultiplyPageComponent,
    DividePageComponent,
    DefaultPageComponent,
    FractionBlockComponent,
    FractionPlusPageComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ApplicationState], {
      developmentMode: true
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
