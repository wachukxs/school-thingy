import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  items = Array.from({length: 100000}).map((_, i) => `${i}`);

  ngOnInit(): void {
  }

}
