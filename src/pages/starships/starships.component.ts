import { Component, Input } from '@angular/core';
import { SWService } from '../../services/sw.service';
import { Starship } from './starships.model';
import { cleanURL } from 'src/shared/pipes/clean-url.pipe';

@Component({
  selector: 'sw-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class Starships {
  @Input() starshipsByMovie: Array<Starship> = [];
  starshipsByMovieEditRoute: string = '';
  starshipsToCheckEdit: Array<Starship> = [];
  starships: Array<Starship> = [];
  tableHeaders: Array<string> = ['Name', 'Model', 'Starship Class', 'Cost in Credits'];
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  constructor(
    private SWService: SWService
  ) { }

  ngOnInit() {
    if (!!this.starshipsByMovie.length) {
      this.starshipsToCheckEdit = this.starshipsByMovie;
      this.checkEditedStarships();
      this.starships = this.starshipsToCheckEdit;
      this.starshipsByMovieEditRoute = '/starship/';
    } else {
      this.getStarshipsByPage();
    }
  }

  checkEditedStarships() {
    const STARSHIPS_IDS = this.starshipsToCheckEdit.map(starship => {
      return new cleanURL().transform(starship.url, 'starships').replaceAll('/', '');
    });
    STARSHIPS_IDS.map((starshipId, index) => {
      const STARSHIP = localStorage.getItem('Starship' + starshipId);
      if (STARSHIP) this.starshipsToCheckEdit[index] = JSON.parse(STARSHIP);
    });
  }

  getStarshipsByPage(page: number = 1) {
    this.SWService.getAllStarships(page).subscribe(starships => {
      this.starshipsToCheckEdit = [...starships.results];
      this.checkEditedStarships();
      this.hasNextPage = !!starships.next;
      this.hasPrevPage = !!starships.previous;
      this.starships = this.starshipsToCheckEdit;
    });
  }
}
