import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
timer:Subscription;
takenTime:number;
timeToSolve:number;

  constructor() { 
    
  }

  reset(timeToSolve:number){
    if(this.timer){
        this.destroy();
      }
    this.takenTime=0;
    this.timeToSolve=timeToSolve;
    this.timer = TimerObservable
        .create(0,1000)
        .subscribe(t=>this.takenTime = t);
  }
  
  destroy(){
    this.takenTime=this.timeToSolve;
    this.timer.unsubscribe();
  }

}
