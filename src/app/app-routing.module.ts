import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
