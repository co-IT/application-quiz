import {FreeTextQuestion, MultipleChoiceQuestion,  SingleChoiceQuestion,   Question} from './question';
import {RequestOptions, RequestOptionsArgs,  Http, Headers} from '@angular/http';
import { QuizResult } from './quizresult';
import { AttendeeService } from './attendee.service';
import { QuestionsService } from './questions.service';

import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { QuizConfigService } from './quizConfig.service';

@Injectable()
export class TransmissionService {
  transmissionComplete = new EventEmitter();
  constructor(
    private questionsService: QuestionsService,
    private attendeeService: AttendeeService,
    private quizConfigService: QuizConfigService,
    private http: Http) {
  }

  transmitAnswers() {
    const quizResult: string = this.formatQuizresult(new QuizResult(this.attendeeService.attendee, this.questionsService.questions));
    // console.log(JSON.stringify(quizResult));

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    body.set('vorname', this.attendeeService.attendee.firstname);
    body.set('nachname', this.attendeeService.attendee.lastname);
    body.set('sender', this.quizConfigService.config.mailSender);
    body.set('receiver', this.quizConfigService.config.mailReceiver);
    body.set('subject', this.quizConfigService.config.subject);
    body.set('body', quizResult);

    return this.http.post(this.quizConfigService.config.mailHandler,
      body.toString(),
      {headers: headers}
    );
  }

  formatQuizresult(result: QuizResult) {
   return `<p>Vorname: ${result.attendee.firstname}</p>
  <p>Nachname: ${result.attendee.lastname}</p>
  <p>Email: ${result.attendee.email}</p>
  <p>Gewählter Bewerbertyp: ${result.attendee.type}
   ${this.iterateQuestions(result.questions)}
   `
  }

  iterateQuestions(result: Question[]) {
    let questionsTemplate = '';
    result.map(question => {
      questionsTemplate += `<html encoding="UTF-8">
      <div style="width:100%; marin-bottom: 10px;">
      <p style="font-weight:bold;">Frage: ${question.questionText}</p>
      ${this.getPossibleAnswers(question)}
      ${this.getAnswers(question)}
      </div>
      </html>`
    })
    return questionsTemplate;
  }

  getPossibleAnswers(question): string {
   let possibleAnswers = '';
   if (question.type === 'SingleChoiceQuestion' || question.type === 'MultipleChoiceQuestion' ) {
    possibleAnswers = `<p style="font-weight:bold;">Mögliche Antoworten</p><ul>`
    question.possibleAnswers.map(possibleAnswer => {
      possibleAnswers += `<li>${possibleAnswer}</li>`
    })
    possibleAnswers += `</ul><p></p>`
    return possibleAnswers;
   } else {
   return possibleAnswers;
   }
  }

  getAnswers(question): string {
    let answers = '<p style="font-weight:bold;">Antwort</p><ul>';
    if (question.type === 'MultipleChoiceQuestion' ) {
      question.givenAnswers.map(answer => {
        answers += `<li>${answer}</li>`
      })
    } else {
      answers += question.givenAnswer;
    }
    answers += `</ul><p></p>`
    return answers;
  }
}
