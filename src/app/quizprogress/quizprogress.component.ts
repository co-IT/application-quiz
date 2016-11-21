import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aq-quizprogress',
  templateUrl: './quizprogress.component.html',
  styleUrls: ['./quizprogress.component.scss']
})
export class QuizprogressComponent {
  @Input() currentQuestionNumber:number;
  @Input('quizlength') quizlength:number; 
  constructor() { }

  ngOnInit() {
  }

}
