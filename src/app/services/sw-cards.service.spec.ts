import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SwCardsService } from './sw-cards.service';

describe('SwCards Service', () => {
  beforeEachProviders(() => [SwCardsService]);

  it('should ...',
      inject([SwCardsService], (service: SwCardsService) => {
    expect(service).toBeTruthy();
  }));
});
