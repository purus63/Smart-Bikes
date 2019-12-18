import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesAndVehComponent } from './bikes-and-veh.component';

describe('BikesAndVehComponent', () => {
  let component: BikesAndVehComponent;
  let fixture: ComponentFixture<BikesAndVehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesAndVehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesAndVehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
