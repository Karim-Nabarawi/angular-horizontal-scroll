import { TestBed } from '@angular/core/testing';

import { AngularVerticalScrollService } from './angular-vertical-scroll.service';

describe('AngularVerticalScrollService', () => {
  let service: AngularVerticalScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularVerticalScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
