import { RouteguardService } from './shared/routeguard.service';
import { InputvalidationService } from './shared/inputvalidation.service';
import { TransmissionService } from './shared/transmission.service';
import { TimerService } from './shared/timer.service';
import { appRoutes } from './app.routing';
import { QuestionsService } from './shared/questions.service';
import { AttendeeService } from './shared/attendee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThanksgivingComponent } from './thanksgiving/thanksgiving.component';
import { QuizComponent } from './quiz/quiz.component';
import { TimerComponent } from './timer/timer.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { ControlinputsComponent } from './controlinputs/controlinputs.component';
import { QuizprogressComponent } from './quizprogress/quizprogress.component';
import { HashLocationStrategy, LocationStrategy, Location, CommonModule } from '@angular/common';
import { AttendeetypeSelectorComponent } from './attendeetype-selector/attendeetype-selector.component';
import { QuizConfigService } from './shared/quizConfig.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ThanksgivingComponent,
    QuizComponent,
    TimerComponent,
    TransmissionComponent,
    ControlinputsComponent,
    QuizprogressComponent,
    AttendeetypeSelectorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    AttendeeService,
    QuestionsService,
    QuizConfigService,
    TimerService,
    TransmissionService,
    InputvalidationService,
    RouteguardService,
     Location,
              {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
