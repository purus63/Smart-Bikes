import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NquireitComponent } from './nquireit.component';

describe('NquireitComponent', () => {
  let component: NquireitComponent;
  let fixture: ComponentFixture<NquireitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NquireitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NquireitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
