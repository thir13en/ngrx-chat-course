import { TestBed } from '@angular/core/testing';
import { TestingModule } from '@testing/testing.module';

import { ThreadsService } from './threads.service';


describe('ThreadsService', () => {
  let service: ThreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
    });
    service = TestBed.inject(ThreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
