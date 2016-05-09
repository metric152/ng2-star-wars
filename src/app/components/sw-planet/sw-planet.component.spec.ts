import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SwPlanetComponent} from './sw-planet.component';

describe('Component: SwPlanet', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SwPlanetComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component', inject([SwPlanetComponent], (component: SwPlanetComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SwPlanetComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SwPlanetComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-sw-planet></app-sw-planet>
  `,
  directives: [SwPlanetComponent]
})
class SwPlanetComponentTestController {
}
