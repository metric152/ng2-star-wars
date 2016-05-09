import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SwVehicleComponent} from './sw-vehicle.component';

describe('Component: SwVehicle', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SwVehicleComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([SwVehicleComponent], (component: SwVehicleComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SwVehicleComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SwVehicleComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-sw-vehicle></app-sw-vehicle>
  `,
  directives: [SwVehicleComponent]
})
class SwVehicleComponentTestController {
}
