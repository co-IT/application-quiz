import { Router } from '@angular/router';
import { TransmissionService } from './../shared/transmission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aq-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.scss']
})
export class TransmissionComponent implements OnInit {

  constructor(private transmissionService:TransmissionService, private router:Router) { 
    
  }

  ngOnInit(){
    this.transmissionService.transmissionComplete.subscribe(isTransmitted=>{
      if(isTransmitted){
        this.router.navigate(['thanksgiving'])
      }
    })
  }
  

  transmit(){
    this.transmissionService.transmitAnswers();
  }

}
