import {Component, OnInit, Input} from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';
import {AbstractSwBaseClass} from '../../shared/AbstractSwBaseClass';
import {SwService} from '../../services/sw-service.service';

@Component({
  moduleId: module.id,
  selector: 'sw-person',
  templateUrl: 'sw-person.component.html',
  styleUrls: ['sw-person.component.css'],
  directives: [SwTagsComponent]
})

export class SwPersonComponent extends AbstractSwBaseClass implements OnInit {
  @Input()
  resource: any;

  constructor(private _service: SwService) {
    // Pass the service into the abstract class
    super(_service);
  }

  ngOnInit() {
    // Populate planets
    this.getPlanets([this.resource.homeworld]);
    // Populate films
    this.getFilms(this.resource.films);
    // Populate vehicles
    this.getVehicles(this.resource.vehicles);
    // Populate starships
    this.getStarships(this.resource.starships);
  }
}
