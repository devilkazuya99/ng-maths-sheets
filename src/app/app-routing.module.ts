import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PlusPageComponent,
  MinusPageComponent,
  MultiplyPageComponent,
  DividePageComponent,
  FractionPlusPageComponent,
  FractionMinusPageComponent,
  FractionMultiplyPageComponent,
  FractionDividePageComponent
} from './pages';
import { DefaultPageComponent } from './default-page/default-page.component';

export const routes: Routes = [
  { path: 'plus', component: PlusPageComponent, data: {label: 'Plus'} },
  { path: 'minus', component: MinusPageComponent, data: {label: 'Minus'} },
  { path: 'multiply', component: MultiplyPageComponent, data: {label: 'Multiply'} },
  { path: 'divide', component: DividePageComponent, data: {label: 'Divide'} },
  { path: 'f_plus', component: FractionPlusPageComponent, data: {label: 'Frac. Plus'} },
  { path: 'f_minus', component: FractionMinusPageComponent, data: {label: 'Frac. Minus'} },
  { path: 'f_multiply', component: FractionMultiplyPageComponent, data: {label: 'Frac. Multiply'} },
  { path: 'f_divide', component: FractionDividePageComponent, data: {label: 'Frac. Divide'} },
  { path: '', component: DefaultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
