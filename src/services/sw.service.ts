import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/pages/movies/movies.model';
import { Character } from 'src/pages/characters/characters.model';
import { Planet } from 'src/pages/planets/planets.model';
import { Starship } from 'src/pages/starships/starships.model';
import { Vehicle } from 'src/pages/vehicles/vehicles.model';
import { Specie } from 'src/pages/species/species.model';

type Pagination = { next: boolean; previous: boolean; }

@Injectable({
  providedIn: 'root'
})
export class SWService {

  private apiURL: string = 'https://swapi.dev/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies() {
    return this.http.get<{ results: Array<Movie> } & Pagination>(`${this.apiURL}/films`);
  }

  getAllCharacters(page: number = 1) {
    return this.http.get<{ results: Array<Character> } & Pagination>(`${this.apiURL}/people/?page=${page}`);
  }

  getCharacterByID(id: number) {
    return this.http.get<Character>(`${this.apiURL}/people/${id}`);
  }

  getAllPlanets(page: number = 1) {
    return this.http.get<{ results: Array<Planet> } & Pagination>(`${this.apiURL}/planets/?page=${page}`);
  }

  getPlanetByID(id: number) {
    return this.http.get<Planet>(`${this.apiURL}/planets/${id}`);
  }

  getAllStarships(page: number = 1) {
    return this.http.get<{ results: Array<Starship> } & Pagination>(`${this.apiURL}/starships/?page=${page}`);
  }

  getStarshipByID(id: number) {
    return this.http.get<Starship>(`${this.apiURL}/starships/${id}`);
  }

  getAllVehicles(page: number = 1) {
    return this.http.get<{ results: Array<Vehicle> } & Pagination>(`${this.apiURL}/vehicles/?page=${page}`);
  }

  getVehicleByID(id: number) {
    return this.http.get<Vehicle>(`${this.apiURL}/vehicles/${id}`);
  }

  getAllSpecies(page: number = 1) {
    return this.http.get<{ results: Array<Specie> } & Pagination>(`${this.apiURL}/species/?page=${page}`);
  }

  getSpecieByID(id: number) {
    return this.http.get<Specie>(`${this.apiURL}/species/${id}`);
  }
}
