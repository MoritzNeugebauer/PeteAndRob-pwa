import { TestBed, inject } from '@angular/core/testing';

import { InstaService } from './insta.service';

describe('InstaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstaService]
    });
  });

  it('should be created', inject([InstaService], (service: InstaService) => {
    expect(service).toBeTruthy();
  }));
});
