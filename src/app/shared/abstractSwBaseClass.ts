import {SwService} from '../services/sw-service.service';

export abstract class AbstractSwBaseClass {
  public films: Object[] = null;
  public vehicles: Object[] = null;
  public starships: Object[] = null;
  public planets: Object[] = null;
  public people: Object[] = null;

  constructor(private swService: SwService) {}

  /**
     * Get the data from the server
     * @param  {string[]} urls An array of uris to fetch
     * @param  {string}   dest The location they should be placed on our class
     * @return {[type]}        void
     */
  private getData(urls: string[], dest: string) {
    // If there's nothing to look up just stop
    if (urls.length == 0) {
      this[dest] = [];
      return;
    }

    this.swService.getResources(urls).subscribe(data => {
      // If the destination is null then create an array
      if (this[dest] == null) this[dest] = [];
      this[dest].push(data);
    });
  }

  getPlanets(planets: string[]) { this.getData(planets, 'planets'); }

  getFilms(films: string[]) { this.getData(films, 'films'); }

  getVehicles(vehicles: string[]) { this.getData(vehicles, 'vehicles'); }

  getStarships(starships: string[]) { this.getData(starships, 'starships'); }

  getPeople(people: string[]) { this.getData(people, 'people'); }
}
