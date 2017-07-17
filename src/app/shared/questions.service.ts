import { Question, MultipleChoiceQuestion, SingleChoiceQuestion, FreeTextQuestion } from './question';
import { Injectable, EventEmitter } from '@angular/core';
import{ Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class QuestionsService {
  questions: Question[];
  questionsFetched = new EventEmitter();
  questionsError: string;

  constructor(private http: Http) {
    this.questions = new Array();
   }

   fetchQuestions() {
     /**For Debug Purposes use local stored questions */
     return this.http.get('./assets/questions.json')
     .map(response => response.json());

   }

}
