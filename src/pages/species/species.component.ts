import { Component, Input } from '@angular/core';
import { SWService } from '../../services/sw.service';
import { Specie } from './species.model';
import { cleanURL } from 'src/shared/pipes/clean-url.pipe';

@Component({
  selector: 'sw-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class Species {
  @Input() speciesByMovie: Array<Specie> = [];
  speciesByMovieEditRoute: string = '';
  speciesToCheckEdit: Array<Specie> = [];
  species: Array<Specie> = [];
  tableHeaders: Array<string> = ['Name', 'Classification', 'Average Lifespan', 'Language'];
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  constructor(
    private SWService: SWService
  ) { }

  ngOnInit() {
    if (!!this.speciesByMovie.length) {
      this.speciesToCheckEdit = this.speciesByMovie;
      this.checkEditedSpecies();
      this.species = this.speciesToCheckEdit;
      this.speciesByMovieEditRoute = '/specie/';
    } else {
      this.getSpeciesByPage();
    }
  }

  checkEditedSpecies() {
    const CHARACTERS_IDS = this.speciesToCheckEdit.map(character => {
      return new cleanURL().transform(character.url, 'species').replaceAll('/', '');
    });
    CHARACTERS_IDS.map((characterId, index) => {
      const CHARACTER = localStorage.getItem('Specie' + characterId);
      if (CHARACTER) this.speciesToCheckEdit[index] = JSON.parse(CHARACTER);
    });
  }

  getSpeciesByPage(page: number = 1) {
    this.SWService.getAllSpecies(page).subscribe(species => {
      this.speciesToCheckEdit = [...species.results];
      this.checkEditedSpecies();
      this.hasNextPage = !!species.next;
      this.hasPrevPage = !!species.previous;
      this.species = this.speciesToCheckEdit;
    });
  }
}
