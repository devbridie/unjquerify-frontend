import { TestBed, inject } from '@angular/core/testing';

import { UrlRetrieverService } from './url-retriever.service';

describe('UrlRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlRetrieverService]
    });
  });

  it('should be created', inject([UrlRetrieverService], (service: UrlRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
