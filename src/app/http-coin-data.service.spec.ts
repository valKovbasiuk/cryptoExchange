import { TestBed } from '@angular/core/testing';

import { HttpCoinDataService } from './http-coin-data.service';

describe('HttpCoinDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCoinDataService = TestBed.get(HttpCoinDataService);
    expect(service).toBeTruthy();
  });
});
