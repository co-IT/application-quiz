import { Attendee } from './attendee';
import { Injectable } from '@angular/core';

@Injectable()
export class AttendeeService {
  attendee:Attendee;

  constructor() { 
    //nothing to do
  }

  setAttendee(attendee:Attendee){
    this.attendee=attendee;
  }

  getAttendee():Attendee{
    return this.attendee;
  }

}
