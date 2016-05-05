import { Component, OnInit, Input } from '@angular/core';

@Component({
      moduleId: module.id,
      selector: 'app-sw-list',
      templateUrl: 'sw-list.component.html',
      styleUrls: ['sw-list.component.css']
})
export class SwListComponent implements OnInit {
    @Input() resource:Object;
    constructor() {}

    ngOnInit() {
    }
}
