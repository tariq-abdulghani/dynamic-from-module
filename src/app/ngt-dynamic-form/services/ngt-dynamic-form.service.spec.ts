import { TestBed } from '@angular/core/testing';

import { NgtDynamicFormService } from './ngt-dynamic-form.service';

describe('NgtDynamicFormService', () => {
  let service: NgtDynamicFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgtDynamicFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
