/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizprogressComponent } from './quizprogress.component';

describe('QuizprogressComponent', () => {
  let component: QuizprogressComponent;
  let fixture: ComponentFixture<QuizprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
