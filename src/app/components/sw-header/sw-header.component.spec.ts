import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SwHeaderComponent} from './sw-header.component';

describe('Component: SwHeader', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SwHeaderComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component', inject([SwHeaderComponent], (component: SwHeaderComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SwHeaderComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SwHeaderComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-sw-header></app-sw-header>
  `,
  directives: [SwHeaderComponent]
})
class SwHeaderComponentTestController {
}
