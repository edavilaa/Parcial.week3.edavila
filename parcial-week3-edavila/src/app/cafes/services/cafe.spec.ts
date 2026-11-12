import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CafeService } from './cafe';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(CafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});