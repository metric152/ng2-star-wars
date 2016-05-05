import {SwService} from '../services/sw-service.service';

export abstract class AbstractSwBaseClass {
    public films:Object[] = null;
    public vehicles:Object[] = null;
    public starships:Object[] = null;
    public planets:Object[] = null;
    public people:Object[] = null;

    constructor(private swService: SwService){}

    getPlanets(planets:string[]){
        this.swService.getResources(planets).subscribe(data => {
            if(this.planets == null) this.planets = [];
            this.planets.push(data);
        });
    }
}
