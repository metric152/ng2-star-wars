import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SwSpeciesComponent} from './sw-species.component';

describe('Component: SwSpecies', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SwSpeciesComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([SwSpeciesComponent], (component: SwSpeciesComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SwSpeciesComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SwSpeciesComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-sw-species></app-sw-species>
  `,
  directives: [SwSpeciesComponent]
})
class SwSpeciesComponentTestController {
}
