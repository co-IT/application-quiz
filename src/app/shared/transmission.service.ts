import {Http} from '@angular/http';
import { QuizResult } from './quizresult';
import { AttendeeService } from './attendee.service';
import { QuestionsService } from './questions.service';

import { Injectable, EventEmitter } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable()
export class TransmissionService {
  transmissionComplete = new EventEmitter();
  constructor(private questionsService: QuestionsService, private attendeeService: AttendeeService, private http: Http) {
  }

  transmitAnswers() {
    const quizResult: QuizResult = new QuizResult(this.attendeeService.attendee, this.questionsService.questions);
    // console.log(JSON.stringify(quizResult));
    return this.http.post(`${environment.hostPath}`, JSON.stringify(quizResult))
  }

}
