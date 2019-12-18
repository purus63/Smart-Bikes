import { TestBed } from '@angular/core/testing';
import { TripService } from './trip.service';
describe('TripService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(TripService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=trip.service.spec.js.map