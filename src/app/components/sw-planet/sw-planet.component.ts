import { Component, OnInit, Input } from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';
import {AbstractSwBaseClass} from '../../shared/AbstractSwBaseClass';
import {SwService} from '../../services/sw-service.service';

@Component({
    moduleId: module.id,
    selector: 'sw-planet',
    templateUrl: 'sw-planet.component.html',
    styleUrls: ['sw-planet.component.css'],
    directives: [SwTagsComponent]
})
export class SwPlanetComponent extends AbstractSwBaseClass implements OnInit {
    @Input()
    resource:any;

    constructor(private _service: SwService) {
        // Pass the service into the abstract class
        super(_service);
    }

    ngOnInit() {
        /**
         * Pipes changed
         * https://auth0.com/blog/2015/09/03/angular2-series-working-with-pipes/
         */
        this.resource.population = +this.resource.population;
        this.getPeople(this.resource.residents);
        this.getFilms(this.resource.films);
    }

}
