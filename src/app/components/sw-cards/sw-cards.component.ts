import { Component, OnInit } from '@angular/core';
import {SwCardsService} from '../../services/sw-cards.service';

@Component({
    moduleId: module.id,
    selector: 'app-sw-cards',
    templateUrl: 'sw-cards.component.html',
    styleUrls: ['sw-cards.component.css'],
    providers:[SwCardsService]
})
export class SwCardsComponent implements OnInit {

    constructor(private swCardsService:SwCardsService) {}

    ngOnInit() {
    }

    public cards(){
      return this.swCardsService.getItems();
    }
}
