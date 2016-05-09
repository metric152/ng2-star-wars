import {Component, OnInit, Input} from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';
import {AbstractSwBaseClass} from '../../shared/AbstractSwBaseClass';
import {SwService} from '../../services/sw-service.service';

@Component({
  moduleId: module.id,
  selector: 'sw-starship',
  templateUrl: 'sw-starship.component.html',
  styleUrls: ['sw-starship.component.css'],
  directives: [SwTagsComponent]
})
export class SwStarshipComponent extends AbstractSwBaseClass implements OnInit {
  @Input()
  resource: any;

  constructor(private _service: SwService) {
    // Pass the service into the abstract class
    super(_service);
  }

  ngOnInit() {
    this.getFilms(this.resource.films);
    this.getPeople(this.resource.pilots);
  }
}
