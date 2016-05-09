import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SwContainerComponent} from './sw-container.component';

describe('Component: SwContainer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SwContainerComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([SwContainerComponent], (component: SwContainerComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SwContainerComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SwContainerComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-sw-container></app-sw-container>
  `,
  directives: [SwContainerComponent]
})
class SwContainerComponentTestController {
}
