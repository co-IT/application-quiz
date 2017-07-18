import {FreeTextQuestion, SingleChoiceQuestion,  MultipleChoiceQuestion} from '../shared/question';
import { InputvalidationService } from './../shared/inputvalidation.service';
import { QuestionsService } from './../shared/questions.service';
import { AttendeeService } from './../shared/attendee.service';
import { Attendee } from './../shared/attendee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { QuizConfigService } from '../shared/quizConfig.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  attendeeForm: FormGroup;
  questionsError: string;

   // person.name  person['name']  fn() [()]
  constructor(
      private builder: FormBuilder,
      private attendeeService: AttendeeService,
      private questionsService: QuestionsService,
      private router: Router,
      private snackBar: MdSnackBar,
      private quizConfigService: QuizConfigService) {
    this.attendeeForm = this.builder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, InputvalidationService.emailValidator])]
    });
    this.questionsError = questionsService.questionsError;
   }


  ngOnInit() {
    this.quizConfigService.getConfig().subscribe(config => this.quizConfigService.config = config);
    this.attendeeService.getAttendeeTypes().subscribe(res => this.attendeeService.attendeeTypes = res);
  }

  setAttendee() {
     this.attendeeService.setAttendee(
        new Attendee(this.attendeeForm.value.firstname, this.attendeeForm.value.lastname, this.attendeeForm.value.email)
        );
      this.router.navigate(['/attendeeSelector'])
  }

}
