import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SwCardsComponent} from './sw-cards.component';

describe('Component: SwCards', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SwCardsComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component', inject([SwCardsComponent], (component: SwCardsComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SwCardsComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SwCardsComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-sw-cards></app-sw-cards>
  `,
  directives: [SwCardsComponent]
})
class SwCardsComponentTestController {
}
