import { TestBed } from '@angular/core/testing';
import { HttpclientService } from './httpclient.service';
describe('HttpclientService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(HttpclientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=httpclient.service.spec.js.map