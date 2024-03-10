import { TestBed } from '@angular/core/testing';

import { ExploreItemService } from './explore-item.service';

describe('ExploreItemServiceService', () => {
  let service: ExploreItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
