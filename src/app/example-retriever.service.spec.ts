import { TestBed, inject } from '@angular/core/testing';

import { ExampleRetrieverService } from './example-retriever.service';

describe('ExampleRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleRetrieverService]
    });
  });

  it('should be created', inject([ExampleRetrieverService], (service: ExampleRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
