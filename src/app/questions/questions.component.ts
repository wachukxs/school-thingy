import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  items = Array.from({length: 50}).map((_, i) => `${i}`);
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  ngOnInit(): void {
  }

}
