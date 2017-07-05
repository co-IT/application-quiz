import {FreeTextQuestion, SingleChoiceQuestion,  MultipleChoiceQuestion} from '../shared/question';
import { InputvalidationService } from './../shared/inputvalidation.service';
import { QuestionsService } from './../shared/questions.service';
import { AttendeeService } from './../shared/attendee.service';
import { Attendee } from './../shared/attendee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from "@angular/material";

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
      private snackBar: MdSnackBar) {
    this.attendeeForm = this.builder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
    this.questionsError = questionsService.questionsError;
   }


  ngOnInit() {
    this.questionsService.questionsFetched.subscribe(isfetched => {
      if (isfetched) {
        console.log(isfetched);
        this.router.navigate(['quiz', 0])
      }
    })
  }

  startQuiz() {
    this.questionsError = '';
    this.attendeeService.setAttendee(
        new Attendee(this.attendeeForm.value.firstname, this.attendeeForm.value.lastname, this.attendeeForm.value.email)
        );
    this.questionsService.fetchQuestions()
    .subscribe(
        response => {
          response.Fragen.forEach(question => {
            switch (question.Typ) {
              case 'MehrfachAuswahl':
                this.questionsService.questions.push(new MultipleChoiceQuestion(question.Text, question.ZeitFuerFrage, question.Antworten))
                break;
              case 'EinfachAuswahl':
                this.questionsService.questions.push(new SingleChoiceQuestion(question.Text, question.ZeitFuerFrage, question.Antworten))
                break;
              case 'FreieAntwort':
                this.questionsService.questions.push(new FreeTextQuestion(question.Text, question.ZeitFuerFrage))
                break;

              default:
                break;
            }
          });
        },
        error => {
          this.questionsError = 'Fehler beim Laden der Fragen';
          return;
        },
        () => {
          this.questionsService.questionsFetched.emit(true);
        }
      )
  }

}
