import { RouteguardService } from './shared/routeguard.service';
import { CanActivate } from '@angular/router';
import { TransmissionComponent } from './transmission/transmission.component';
import { ThanksgivingComponent } from './thanksgiving/thanksgiving.component';
import { QuizComponent } from './quiz/quiz.component';
import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: 'welcome', component:WelcomeComponent},
    {path: 'quiz/:questionNumber', component:QuizComponent,canActivate:[RouteguardService]},
    {path: 'transmission', component:TransmissionComponent,canActivate:[RouteguardService]},
    {path: 'thanksgiving', component:ThanksgivingComponent,canActivate:[RouteguardService]},
    {path: '**',component:WelcomeComponent}
]