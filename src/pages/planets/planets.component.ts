import { Component, Input } from '@angular/core';
import { SWService } from '../../services/sw.service';
import { Planet } from './planets.model';
import { cleanURL } from 'src/shared/pipes/clean-url.pipe';

@Component({
  selector: 'sw-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class Planets {
  @Input() planetsByMovie: Array<Planet> = [];
  planetsByMovieEditRoute: string = '';
  planetsToCheckEdit: Array<Planet> = [];
  planets: Array<Planet> = [];
  tableHeaders: Array<string> = ['Name', 'Climate', 'Terrain', 'Population'];
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  constructor(
    private SWService: SWService
  ) { }

  ngOnInit() {
    if (!!this.planetsByMovie.length) {
      this.planetsToCheckEdit = this.planetsByMovie;
      this.checkEditedPlanets();
      this.planets = this.planetsToCheckEdit;
      this.planetsByMovieEditRoute = '/planet/';
    } else {
      this.getPlanetsByPage();
    }
  }

  checkEditedPlanets() {
    const PLANETS_IDS = this.planetsToCheckEdit.map(planet => {
      return new cleanURL().transform(planet.url, 'planets').replaceAll('/', '');
    });
    PLANETS_IDS.map((planetId, index) => {
      const PLANET = localStorage.getItem('Planet' + planetId);
      if (PLANET) this.planetsToCheckEdit[index] = JSON.parse(PLANET);
    });
  }

  getPlanetsByPage(page: number = 1) {
    this.SWService.getAllPlanets(page).subscribe(planets => {
      this.planetsToCheckEdit = [...planets.results];
      this.checkEditedPlanets();
      this.hasNextPage = !!planets.next;
      this.hasPrevPage = !!planets.previous;
      this.planets = this.planetsToCheckEdit;
    });
  }
}
