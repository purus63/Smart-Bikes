import { TestBed } from '@angular/core/testing';
import { AuthGaurdService } from './auth-gaurd.service';
describe('AuthGaurdService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(AuthGaurdService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-gaurd.service.spec.js.map