import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PlusPageComponent,
  MinusPageComponent,
  MultiplyPageComponent,
  DividePageComponent,
  FractionPlusPageComponent,
} from './pages';
import { DefaultPageComponent } from './default-page/default-page.component';

const routes: Routes = [
  { path: 'plus', component: PlusPageComponent },
  { path: 'minus', component: MinusPageComponent },
  { path: 'multiply', component: MultiplyPageComponent },
  { path: 'divide', component: DividePageComponent },
  { path: 'f_plus', component: FractionPlusPageComponent },
  { path: '', component: DefaultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
