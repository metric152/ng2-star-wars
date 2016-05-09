import {Injectable} from '@angular/core';
import {Card} from '../models/Card';

@Injectable()
export class SwCardsService {
  public items: Card[] = [];
  constructor() {}

  /**
     * Reset the list service
     * @param  {Object} item json data
     * @param  {string} type the type of item
     * @return {void}
     */
  public resetList(item, type) { this.items = [new Card(type, item)]; }

  /**
     * Add an item to the list service
     * @param  {Object} item json data
     * @param  {string} type the type of item
     * @return {void}
     */
  public addItem(item, type) { this.items.push(new Card(type, item)); }

  /**
     * Get all items for the list
     * @return {Object[]} All the items in the list
     */
  public getItems() { return this.items; }
}
