import { Component, OnInit } from '@angular/core';
import { SWService } from '../../services/sw.service';
import { Movie } from './movies.model';
import { cleanURL } from 'src/shared/pipes/clean-url.pipe';
import { Planet } from '../planets/planets.model';
import { Character } from '../characters/characters.model';
import { Starship } from '../starships/starships.model';
import { Vehicle } from '../vehicles/vehicles.model';
import { Specie } from '../species/species.model';

@Component({
  selector: 'sw-movie-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class Movies implements OnInit {
  movies: Array<Movie> = [];
  movieCharacters: Array<Character> = [];
  moviePlanets: Array<Planet> = [];
  movieStarships: Array<Starship> = [];
  movieVehicles: Array<Vehicle> = [];
  movieSpecies: Array<Specie> = [];
  tableHeaders: Array<string> = ['Title', 'Episode ID', 'Director', 'Release Date'];
  showEditMovieData: boolean = false;
  movieDataToEdit: Movie = { } as Movie;

  constructor(
    private SWService: SWService,
  ) { }

  ngOnInit() {
    this.SWService.getAllMovies().subscribe(movies => {
      this.movies = movies.results;
    });
  }

  editMovieDataMenu(movie: Movie) {
    this.movieDataToEdit = movie;
    this.handleShowMovieDataMenu();
  }

  handleShowMovieDataMenu() {
    this.showEditMovieData = !this.showEditMovieData;
    this.clearDataByMovie();
  }

  clearDataByMovie() {
    this.moviePlanets = [];
    this.movieCharacters = [];
    this.movieStarships = [];
    this.movieVehicles = [];
    this.movieSpecies = [];
  }

  editMovieData() {
    console.log(this.movieDataToEdit);
  }

  editMovieCharacters(characters: Array<string>) {
    characters.map(character => {
      const CHARACTER_ID = new cleanURL().transform(character, 'people').replaceAll('/', '');
      this.SWService.getCharacterByID(Number(CHARACTER_ID)).subscribe(character => {
        this.movieCharacters.push(character);
      });
      return character;
    });
    this.clearDataByMovie();
  }

  editMoviePlanets(planets: Array<string>) {
    planets.map(planet => {
      const PLANET_ID = new cleanURL().transform(planet, 'planets').replaceAll('/', '');
      this.SWService.getPlanetByID(Number(PLANET_ID)).subscribe(planet => {
        this.moviePlanets.push(planet);
      });
      return planet;
    });
    this.clearDataByMovie();
  }

  editMovieStarships(starships: Array<string>) {
    starships.map(starship => {
      const STARSHIP_ID = new cleanURL().transform(starship, 'starships').replaceAll('/', '');
      this.SWService.getStarshipByID(Number(STARSHIP_ID)).subscribe(starship => {
        this.movieStarships.push(starship);
      });
      return starship;
    });
    this.clearDataByMovie();
  }

  editMovieVehicles(vehicles: Array<string>) {
    vehicles.map(vehicle => {
      const VEHICLE_ID = new cleanURL().transform(vehicle, 'vehicles').replaceAll('/', '');
      this.SWService.getVehicleByID(Number(VEHICLE_ID)).subscribe(vehicle => {
        this.movieVehicles.push(vehicle);
      });
      return vehicle;
    });
    this.clearDataByMovie();
  }

  editMovieSpecies(species: Array<string>) {
    species.map(specie => {
      const SPECIE_ID = new cleanURL().transform(specie, 'species').replaceAll('/', '');
      this.SWService.getSpecieByID(Number(SPECIE_ID)).subscribe(specie => {
        this.movieSpecies.push(specie);
      });
      return specie;
    });
    this.clearDataByMovie();
  }
}
