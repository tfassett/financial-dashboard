import { TestBed } from '@angular/core/testing';

import { IextradingService } from './iextrading.service';

describe('IextradingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IextradingService = TestBed.get(IextradingService);
    expect(service).toBeTruthy();
  });
});
