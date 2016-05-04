import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2StarWarsAppComponent } from '../app/ng2-star-wars.component';

beforeEachProviders(() => [Ng2StarWarsAppComponent]);

describe('App: Ng2StarWars', () => {
  it('should create the app',
      inject([Ng2StarWarsAppComponent], (app: Ng2StarWarsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-star-wars works!\'',
      inject([Ng2StarWarsAppComponent], (app: Ng2StarWarsAppComponent) => {
    expect(app.title).toEqual('ng2-star-wars works!');
  }));
});
