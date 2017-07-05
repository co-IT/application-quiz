import { TimerService } from './../shared/timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aq-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(public timerService: TimerService) {
  }

  ngOnInit() {
  }

}
