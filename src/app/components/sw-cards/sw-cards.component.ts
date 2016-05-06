import { Component, OnInit } from '@angular/core';
import {SwCardsService} from '../../services/sw-cards.service';
import {SwListComponent} from '../sw-list/';
import {SwPersonComponent} from '../sw-person/';
import {SwPlanetComponent} from '../sw-planet/';
import {SwFilmComponent} from '../sw-film/';
import {SwSpeciesComponent} from '../sw-species/';
import {SwVehicleComponent} from '../sw-vehicle/';
import {SwStarshipComponent} from '../sw-starship/';

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
                 SwVehicleComponent,
                 SwStarshipComponent]
})
export class SwCardsComponent implements OnInit {
    constructor(private swCardsService:SwCardsService) {}

    ngOnInit() {
    }

    public cards(){
      return this.swCardsService.getItems();
    }
}
