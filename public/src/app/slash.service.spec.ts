import { TestBed, inject } from '@angular/core/testing';

import { SlashService } from './slash.service';

describe('SlashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlashService]
    });
  });

  it('should be created', inject([SlashService], (service: SlashService) => {
    expect(service).toBeTruthy();
  }));
});
