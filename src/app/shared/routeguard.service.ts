import { QuestionsService } from './questions.service';
import { AttendeeService } from './attendee.service';
import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable()
export class RouteguardService implements CanActivate{

  constructor(private attendeeService:AttendeeService, private questionsService:QuestionsService,private router:Router) {}

  canActivate(): boolean {
    if((this.questionsService.questions.length==0 && typeof this.attendeeService.attendee === 'undefined')){
      this.router.navigate(['']);
        return false;
      
    }
    else{
       return true; 
    }
  }


}
