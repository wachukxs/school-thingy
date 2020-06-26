import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Question } from './../models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Array<Question> = [
    { question: 'What is the name of your school\'s gateman if any?',
    answers: ['21', 'Okay'], type: 'single-choice' },
    { question: 'What is the name of the author of the English Textbox?',
    answers: ['21', 'Three', 'Light', 'This thing'], type: 'multiple-choice' },
    { question: 'This is another question we feel you should know the answer to',
    answers: ['21', 'Appear'], type: 'single-choice' },
    { question: 'Why are they looking _ in the pond and _ searching for a fish, when there is none?',
    answers: ['21', 'Another answer'], type: 'fill-blanks' },
    { question: 'I hope you\'ve eaten today before taking this test, and are ready for it',
    answers: ['21', 'My country', 'that place'], type: 'multiple-choice' },
    { question: 'Don\'t forget to spell your name correctly, and fill _ your correct student ID',
    answers: ['21', 'Actually'], type: 'fill-blanks' }
  ];

  constructor() { }

  get() {
    return of(this.questions);
  }
}
