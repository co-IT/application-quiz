import {FreeTextQuestion, SingleChoiceQuestion,  MultipleChoiceQuestion} from '../shared/question';
import {MdSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {QuestionsService} from '../shared/questions.service';
import {AttendeeService} from '../shared/attendee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aq-attendeetype-selector',
  templateUrl: './attendeetype-selector.component.html',
  styleUrls: ['./attendeetype-selector.component.scss']
})
export class AttendeetypeSelectorComponent implements OnInit {
  questionsError: string;
  attendeeTypes: string[];

  constructor(
    private attendeeService: AttendeeService,
      private questionsService: QuestionsService,
      private router: Router,
      private snackBar: MdSnackBar) {
        this.attendeeTypes = attendeeService.attendeeTypes;
        console.log(this.attendeeTypes);
       }

  ngOnInit() {
  this.questionsService.questionsFetched.subscribe(isfetched => {
      if (isfetched) {
        console.log(isfetched);
        this.router.navigate(['quiz', 0])
      }
    })
  }

  startQuiz(attendeeType) {
    this.questionsError = '';
    this.attendeeService.attendee.type = attendeeType;
    this.questionsService.fetchQuestions(attendeeType)
    .subscribe(
        response => {
          // JSON: Attendee-type
          response.map(question => {
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
