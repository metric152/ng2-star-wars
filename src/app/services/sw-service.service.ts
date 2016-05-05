import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class SwService {

    public URI = 'http://swapi.co/api/';
    // Holds the objects for display
    private items = [];
    private cache = {};

    constructor(private http: Http) {}

    /**
     * This is the cacheing section
     **/

    // Check to see if the item is in cache
    private isItemInCache(key: string){
        return !!this.cache[key];
    }

    // Pull data from the cache
    private getItemFromCache(key: string){
        if(this.isItemInCache(key)) {
            return this.cache[key];
        }
        return null;
    }

    // Set data in the cache
    private setItemInCache(key: string, value: Object){
        if(!this.cache[key]){
            this.cache[key] = value;
        }
    }

    /**
     * This is the cacheing section
     **/

    // Pull data from the request
    private extractData(res: Response){
        if(res.status < 200 || res.status >= 300){
            throw new Error(`Bad response: ${res.status}`);
        }
        // Pull data from the response
        return res.json() || {};
    }

    // Make the data request
    public getResources(uriList: Array<string>){
        // Walk through our objects
        return Rx.Observable.create(subscriber => {

            // Loop through the uris and get the data behind them
            uriList.forEach(uri => {
                if(this.isItemInCache(uri)){
                    subscriber.next(this.getItemFromCache(uri));
                }
                else{
                    let sub = this.http.get(uri).map(this.extractData);

                    // Wait for the data to come back
                    sub.subscribe(data => {
                        this.setItemInCache(uri, data);
                        subscriber.next(data);
                    }, error => console.log(error));
                }
            });
        });
    }
}
