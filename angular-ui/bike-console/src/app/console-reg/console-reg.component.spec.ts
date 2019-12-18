import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleRegComponent } from './console-reg.component';

describe('ConsoleRegComponent', () => {
  let component: ConsoleRegComponent;
  let fixture: ComponentFixture<ConsoleRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
