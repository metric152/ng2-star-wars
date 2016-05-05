import { Component, OnInit, Input } from '@angular/core';
import {SwTagsComponent} from '../sw-tags/index';

@Component({
    moduleId: module.id,
    selector: 'sw-list',
    templateUrl: 'sw-list.component.html',
    styleUrls: ['sw-list.component.css'],
    directives: [SwTagsComponent]
})

export class SwListComponent implements OnInit {
    @Input()
    resource:Object;
    
    constructor() {}

    ngOnInit() {
    }
}
