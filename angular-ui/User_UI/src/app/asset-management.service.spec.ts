import { TestBed } from '@angular/core/testing';

import { AssetManagementService } from './asset-management.service';

describe('AssetManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetManagementService = TestBed.get(AssetManagementService);
    expect(service).toBeTruthy();
  });
});
