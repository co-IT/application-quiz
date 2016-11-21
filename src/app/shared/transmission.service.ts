import { QuizResult } from './quizresult';
import { AttendeeService } from './attendee.service';
import { QuestionsService } from './questions.service';

import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TransmissionService {
  transmissionComplete = new EventEmitter();
  constructor(private questionsService:QuestionsService, private attendeeService:AttendeeService) { 
    
  }

  transmitAnswers(){
    let quizResult:QuizResult = new QuizResult(this.attendeeService.attendee,this.questionsService.questions);
    console.log(JSON.stringify(quizResult));
    this.transmissionComplete.emit(true);
  }

}
