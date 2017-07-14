import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeetypeSelectorComponent } from './attendeetype-selector.component';

describe('AttendeetypeSelectorComponent', () => {
  let component: AttendeetypeSelectorComponent;
  let fixture: ComponentFixture<AttendeetypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeetypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeetypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
