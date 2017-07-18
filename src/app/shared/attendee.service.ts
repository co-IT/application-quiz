import {Http} from '@angular/http';
import { Attendee } from './attendee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/distinct'
import 'rxjs/add/operator/concatAll'
import 'rxjs/add/operator/mergeAll'
import 'rxjs/add/operator/toArray'

@Injectable()
export class AttendeeService {
  attendee: Attendee;
  attendeeTypes: string[];

  constructor(private http: Http) {
  }

  setAttendee(attendee: Attendee) {
    this.attendee = attendee;
  }

  getAttendee(): Attendee {
    return this.attendee;
  }

  getAttendeeTypes() {
    return this.http.get('./assets/questions.json')
    .map(response => response.json())
    .map(parsedResponse => parsedResponse.Fragen)
    .map(questions => {
        return questions.map(question =>
          question.zugehoehrigeBewerberTypen);
     })
    .mergeAll()
    .mergeAll()
    .distinct()
    .toArray()
  }
}
