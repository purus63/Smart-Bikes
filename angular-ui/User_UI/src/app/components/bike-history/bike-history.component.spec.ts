import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeHistoryComponent } from './bike-history.component';

describe('BikeHistoryComponent', () => {
  let component: BikeHistoryComponent;
  let fixture: ComponentFixture<BikeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
