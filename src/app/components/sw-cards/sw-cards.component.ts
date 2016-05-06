import { Component, OnInit } from '@angular/core';
import {SwCardsService} from '../../services/sw-cards.service';
import {SwListComponent} from '../sw-list/index';
import {SwPersonComponent} from '../sw-person/index';
import {SwPlanetComponent} from '../sw-planet/index';
import {SwFilmComponent} from '../sw-film/index';
import {SwSpeciesComponent} from '../sw-species/index';
import {SwVehicleComponent} from '../sw-vehicle/index';

@Component({
    moduleId: module.id,
    selector: 'app-sw-cards',
    templateUrl: 'sw-cards.component.html',
    styleUrls: ['sw-cards.component.css'],
    directives: [SwListComponent,
                 SwPersonComponent,
                 SwPlanetComponent,
                 SwFilmComponent,
                 SwSpeciesComponent,
                 SwVehicleComponent]
})
export class SwCardsComponent implements OnInit {
    constructor(private swCardsService:SwCardsService) {}

    ngOnInit() {
    }

    public cards(){
      return this.swCardsService.getItems();
    }
}
