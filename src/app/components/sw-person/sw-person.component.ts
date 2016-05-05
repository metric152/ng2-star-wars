import { Component, OnInit, Input } from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';

@Component({
    moduleId: module.id,
    selector: 'sw-person',
    templateUrl: 'sw-person.component.html',
    styleUrls: ['sw-person.component.css'],
    directives: [SwTagsComponent]
})
export class SwPersonComponent implements OnInit {
    @Input()
    resource:Object;

    constructor() {}

    ngOnInit() {
    }

}
