import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {SwService} from './sw-service.service';

describe('SwService Service', () => {
  beforeEachProviders(() => [SwService]);

  it('should ...', inject([SwService], (service: SwService) => { expect(service).toBeTruthy(); }));
});
