import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from './../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Array<object>;

  constructor(private questionsService: QuestionsService) { }

  items = Array.from({length: 50}).map((_, i) => `${i}`);
  hideRequiredControl = new FormControl(); // radio-group, can initialize with default value e.g. new FormControl(false);
  floatLabelControl = new FormControl(); // checkbox-group, can initialize with default value e.g. new FormControl('auto');

  ngOnInit(): void {
    this.questionsService.get().subscribe(res => {
      this.questions = res;
    });
  }

}
