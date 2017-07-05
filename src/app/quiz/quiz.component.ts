import { TimerService } from './../shared/timer.service';
import { TimerComponent } from './../timer/timer.component';
import { QuestionsService } from './../shared/questions.service';
import { Question } from './../shared/question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],

})
export class QuizComponent {
  currentQuestion;
  currentQuestionNumber: number;

  answer: any = null;
  freetextAnswer: string;
  singleChoiceAnswer: string;

  constructor(
    private ar: ActivatedRoute,
    private questionService: QuestionsService,
    private router: Router,
    private timerService: TimerService) {
    /**Fetch routernavigation on changed parameters */
    this.ar.params.subscribe(params => {
      /** if Browser-Back-Navigation */
      if (this.currentQuestionNumber > params['questionNumber']) {
        this.router.navigate(['quiz', this.currentQuestionNumber]);
      } else if (this.currentQuestionNumber === params['questionNumber']) {
        /**do nothing */
      } else {
        this.currentQuestionNumber = params['questionNumber'];
        this.currentQuestion = this.questionService.questions[this.currentQuestionNumber];
        if (typeof this.currentQuestion === 'undefined') {
          this.router.navigate(['']);
        } else if (this.currentQuestion.takenTime > 0) {
          this.timerService.destroy();
        } else {
        this.timerService.reset(this.currentQuestion.time);
        }
    }
    });
   }

   /**function to update checkbox' selected values */
  updateMultipleChoiceAnswer(toggledAnswer) {
    if (!Array.isArray(this.answer)) {
      this.answer = new Array();
    }
    if (this.answer.indexOf(toggledAnswer) > -1) {
      this.answer.splice(this.answer.indexOf(toggledAnswer), 1);
    } else {
      this.answer.push(toggledAnswer);
    }
  }

  nextQuestion() {
    // SetAnswer
    if (typeof this.currentQuestion.takenTime === 'undefined') {
      this.currentQuestion.setAnswer(this.answer, this.timerService.takenTime);
    }
    this.answer = null;
    /** Navigate to Next Question */
    this.currentQuestionNumber++;
    if (this.currentQuestionNumber < this.questionService.questions.length) {
      this.router.navigate(['quiz', this.currentQuestionNumber]);
    } else {
      // SendData
      this.router.navigate(['transmission']);
    }
  }
}
