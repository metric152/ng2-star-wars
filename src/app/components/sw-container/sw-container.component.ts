import { Component, OnInit } from '@angular/core';
import {SwHeaderComponent} from '../sw-header/index';
import {SwCardsComponent} from '../sw-cards/index';

@Component({
    // https://angular.io/docs/ts/latest/guide/component-styles.html#!#relative-urls
    moduleId: module.id,
    selector: 'sw-container',
    templateUrl: 'sw-container.component.html',
    styleUrls: ['sw-container.component.css'],
    directives: [SwHeaderComponent, SwCardsComponent]
})
export class SwContainerComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

}
