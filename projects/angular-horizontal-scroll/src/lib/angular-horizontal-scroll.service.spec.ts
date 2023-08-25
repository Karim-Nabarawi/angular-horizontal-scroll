import { TestBed } from '@angular/core/testing';

import { AngularHorizontalScrollService } from './angular-horizontal-scroll.service';

describe('AngularHorizontalScrollService', () => {
  let service: AngularHorizontalScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularHorizontalScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
