import { TestBed, inject } from '@angular/core/testing';

import { UrlDataService } from './url-data.service';

describe('UrlDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlDataService]
    });
  });

  it('should be created', inject([UrlDataService], (service: UrlDataService) => {
    expect(service).toBeTruthy();
  }));
});
