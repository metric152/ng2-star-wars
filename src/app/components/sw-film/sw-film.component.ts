import {Component, OnInit, Input} from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';
import {AbstractSwBaseClass} from '../../shared/AbstractSwBaseClass';
import {SwService} from '../../services/sw-service.service';

@Component({
  moduleId: module.id,
  selector: 'sw-film',
  templateUrl: 'sw-film.component.html',
  styleUrls: ['sw-film.component.css'],
  directives: [SwTagsComponent]
})

export class SwFilmComponent extends AbstractSwBaseClass implements OnInit {
  @Input()
  resource: any;

  constructor(private _service: SwService) {
    // Pass the service into the abstract class
    super(_service);
  }

  ngOnInit() {
    // Get characters
    this.getPeople(this.resource.characters);
    // Populate planets
    this.getPlanets(this.resource.planets);
    // Populate starships
    this.getStarships(this.resource.starships);
  }
}
