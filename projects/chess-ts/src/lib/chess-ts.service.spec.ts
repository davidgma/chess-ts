import { TestBed } from '@angular/core/testing';

import { ChessTsService } from './chess-ts.service';

describe('ChessTsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChessTsService = TestBed.get(ChessTsService);
    expect(service).toBeTruthy();
  });
});
