import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication-bike.service';
describe('AuthenticationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(AuthenticationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authentication-bike.service.spec.js.map