import { Component, OnInit } from '@angular/core';
import {SwCardsService} from '../../services/sw-cards.service';
import {SwListComponent} from '../sw-list/index';

@Component({
    moduleId: module.id,
    selector: 'app-sw-cards',
    templateUrl: 'sw-cards.component.html',
    styleUrls: ['sw-cards.component.css'],
    directives: [SwListComponent]
})
export class SwCardsComponent implements OnInit {
    constructor(private swCardsService:SwCardsService) {}

    ngOnInit() {
    }

    public cards(){
      return this.swCardsService.getItems();
    }
}
