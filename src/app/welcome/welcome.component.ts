import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'aq-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  attendeeForm:FormGroup;

   // person.name  person['name']  fn() [()]
  constructor(private builder:FormBuilder) {
    this.attendeeForm = this.builder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  start() {
    //
    alert('test gestartet');
  }

}
