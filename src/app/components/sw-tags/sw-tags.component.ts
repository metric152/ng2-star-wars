import { Component, OnInit, Input } from '@angular/core';
import {SwCardsService} from '../../services/sw-cards.service';

@Component({
  moduleId: module.id,
  selector: 'sw-tags',
  templateUrl: 'sw-tags.component.html',
  styleUrls: ['sw-tags.component.css']
})

export class SwTagsComponent implements OnInit {
    @Input()
    public tags:Object[];
    @Input()
    public type:string;

    constructor(private swCardsService: SwCardsService) {}

    ngOnInit() {
    }

    public displayItem(tag){
        this.swCardsService.addItem(tag, this.type);
    }
}
