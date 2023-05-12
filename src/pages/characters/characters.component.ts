import { Component, OnInit, Input } from '@angular/core';
import { SWService } from '../../services/sw.service';
import { Character } from './characters.model';
import { cleanURL } from 'src/shared/pipes/clean-url.pipe';

@Component({
  selector: 'sw-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class Characters implements OnInit {
  @Input() charactersByMovie: Array<Character> = [];
  charactersByMovieEditRoute: string = '';
  charactersToCheckEdit: Array<Character> = [];
  characters: Array<Character> = [];
  tableHeaders: Array<string> = ['Name', 'Gender', 'Birth Year', 'Height'];
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  constructor(
    private SWService: SWService
  ) { }

  ngOnInit() {
    if (!!this.charactersByMovie.length) {
      this.charactersToCheckEdit = this.charactersByMovie;
      this.checkEditedCharacters();
      this.characters = this.charactersToCheckEdit;
      this.charactersByMovieEditRoute = '/character/';
    } else {
      this.getCharactersByPage();
    }
  }

  checkEditedCharacters() {
    const CHARACTERS_IDS = this.charactersToCheckEdit.map(character => {
      return new cleanURL().transform(character.url, 'people').replaceAll('/', '');
    });
    CHARACTERS_IDS.map((characterId, index) => {
      const CHARACTER = localStorage.getItem('Character' + characterId);
      if (CHARACTER) this.charactersToCheckEdit[index] = JSON.parse(CHARACTER);
    });
  }

  getCharactersByPage(page: number = 1) {
    this.SWService.getAllCharacters(page).subscribe(characters => {
      this.charactersToCheckEdit = [...characters.results];
      this.checkEditedCharacters();
      this.hasNextPage = !!characters.next;
      this.hasPrevPage = !!characters.previous;
      this.characters = this.charactersToCheckEdit;
    });
  }
}
