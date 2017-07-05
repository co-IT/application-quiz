import { Router } from '@angular/router';
import { TransmissionService } from './../shared/transmission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aq-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.scss']
})
export class TransmissionComponent implements OnInit {
  transmissionError: string;
  constructor(private transmissionService: TransmissionService, private router: Router) { }

  ngOnInit() {
    this.transmissionService.transmissionComplete.subscribe(isTransmitted => {
      if (isTransmitted) {
        this.router.navigate(['thanksgiving'])
      } else {
        this.transmissionError = 'Fehler beim Übermitteln der Antworten';
      }
    })
  }

  transmit() {
    this.transmissionService.transmitAnswers()
    .subscribe(response => {
      this.transmissionService.transmissionComplete.emit(true);
    }, err => {
      this.transmissionService.transmissionComplete.emit(false);
    })
  }
}
