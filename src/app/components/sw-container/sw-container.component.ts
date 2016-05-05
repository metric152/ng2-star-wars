import { Component, OnInit } from '@angular/core';
import {SwHeaderComponent} from '../sw-header/index';
import {SwCardsComponent} from '../sw-cards/index';
import {SwCardsService} from '../../services/sw-cards.service';
import {SwService} from '../../services/sw-service.service';

@Component({
    // This allows the component to complete it's include path for css and html
    // https://angular.io/docs/ts/latest/guide/component-styles.html#!#relative-urls
    moduleId: module.id,
    selector: 'sw-container',
    templateUrl: 'sw-container.component.html',
    styleUrls: ['sw-container.component.css'],
    directives: [SwHeaderComponent, SwCardsComponent],
    // *IMPORTANT* Set providers only once at the top level of your app
    // Setting multiple providers gives a unique service instead of a singleton
    // https://angular.io/docs/ts/latest/guide/dependency-injection.html
    providers: [SwCardsService, SwService]
})
export class SwContainerComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

}
