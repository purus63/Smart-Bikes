import { async, TestBed } from '@angular/core/testing';
import { MapNavigationComponent } from './map-navigation.component';
describe('MapNavigationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapNavigationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MapNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=map-navigation.component.spec.js.map