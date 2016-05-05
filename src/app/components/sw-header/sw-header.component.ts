import { Component, OnInit } from '@angular/core';
import {SwService} from '../../services/sw-service.service';
import {SwCardsService} from '../../services/sw-cards.service';

@Component({
    moduleId: module.id,
    selector: 'app-sw-header',
    templateUrl: 'sw-header.component.html',
    styleUrls: ['sw-header.component.css'],
    providers:[SwService, SwCardsService]
})
export class SwHeaderComponent implements OnInit {
    public keys: string[];
    private resources: Object;

    constructor(private swService: SwService, private swCardsService: SwCardsService) {}

    ngOnInit() {
        // Make the service call for resoruces
        this.swService.getResources([this.swService.URI]).subscribe(data => {
            // There is no ng-repeat. Have to grab the keys and look it up
            // https://github.com/angular/angular/issues/2246
            this.keys = Object.keys(data);
            this.resources = data;
      });
    }

    // Listen for the click from the UI
    public getResource(key:string) {
        console.log( this.resources[key] );
        this.swService.getResources([this.resources[key]]).subscribe(data => {
            console.log( data );
            this.swCardsService.resetList(data, 'list');
        });
    };}
