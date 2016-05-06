import { Component, OnInit, Input } from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';
import {AbstractSwBaseClass} from '../../shared/AbstractSwBaseClass';
import {SwService} from '../../services/sw-service.service';

@Component({
    moduleId: module.id,
    selector: 'sw-species',
    templateUrl: 'sw-species.component.html',
    styleUrls: ['sw-species.component.css'],
    directives: [SwTagsComponent]
})
export class SwSpeciesComponent extends AbstractSwBaseClass implements OnInit {
    @Input()
    resource:any;

    constructor(private _service: SwService) {
        // Pass the service into the abstract class
        super(_service);
    }

    ngOnInit() {
        this.getPeople(this.resource.people);
        this.getFilms(this.resource.films);
        this.getPlanets([this.resource.homeworld]);
    }
}
