import { InputvalidationService } from './../shared/inputvalidation.service';
import { QuestionsService } from './../shared/questions.service';
import { AttendeeService } from './../shared/attendee.service';
import { Attendee } from './../shared/attendee'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  attendeeForm:FormGroup;

   // person.name  person['name']  fn() [()]
  constructor(private builder:FormBuilder,private attendeeService:AttendeeService, private questionsService:QuestionsService, private router:Router) {
    this.attendeeForm = this.builder.group({
      firstname: ['', Validators.compose([Validators.required,Validators.minLength(2)])],
      lastname: ['', Validators.compose([Validators.required,Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required,InputvalidationService.emailValidator])]
    });

   }

  ngOnInit() {
    this.questionsService.questionsFetched.subscribe(isfetched=>{
      if(isfetched){
        console.log(isfetched);
        this.router.navigate(['quiz',0])
      }
    })
  }

  startQuiz() {
    this.attendeeService.setAttendee(new Attendee(this.attendeeForm.value.firstname,this.attendeeForm.value.lastname,this.attendeeForm.value.email));
    this.questionsService.fetchQuestions();
  }

}
