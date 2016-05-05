import { Injectable } from '@angular/core';

@Injectable()
export class SwCardsService {

    private items:Object[] = [];
    constructor() {}

    /**
     * Reset the list service
     * @param  {Object} item json data
     * @param  {string} type the type of item
     * @return {void}
     */
    public resetList(item, type){
        this.items = [{
            'item': item,
            'type': type
        }];
    }

    /**
     * Add an item to the list service
     * @param  {Object} item json data
     * @param  {string} type the type of item
     * @return {void}
     */
    public addItem(item, type){
        this.items.unshift({
            'item': item,
            'type': type
        })
    }

    /**
     * Get all items for the list
     * @return {Object[]} All the items in the list
     */
    public getItems(){
        return this.items;
    }

}
