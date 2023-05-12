import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { Movies } from './movies/movies.component';
import { Starships } from './starships/starships.component';
import { Characters } from './characters/characters.component';
import { Planets } from './planets/planets.component';
import { Vehicles } from './vehicles/vehicles.component';
import { Species } from './species/species.component';
import { EditCharacter } from './characters/editCharacter/editCharacter.component';
import { EditPlanet } from './planets/editPlanet/editPlanet.component';
import { EditStarship } from './starships/editStarship/editStarship.component';
import { EditVehicle } from './vehicles/editVehicle/editVehicle.component';
import { EditSpecie } from './species/editSpecie/editSpecie.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'movies',
      component: Movies,
    },
    {
      path: 'movies/edit/character/:id',
      component: EditCharacter,
    },
    {
      path: 'movies/edit/planet/:id',
      component: EditPlanet,
    },
    {
      path: 'movies/edit/starship/:id',
      component: EditStarship,
    },
    {
      path: 'movies/edit/vehicle/:id',
      component: EditVehicle,
    },
    {
      path: 'movies/edit/specie/:id',
      component: EditSpecie,
    },
    {
      path: 'characters',
      component: Characters,
    },
    {
      path: 'characters/edit/:id',
      component: EditCharacter,
    },
    {
      path: 'planets',
      component: Planets,
    },
    {
      path: 'planets/edit/:id',
      component: EditPlanet,
    },
    {
      path: 'starships',
      component: Starships,
    },
    {
      path: 'starships/edit/:id',
      component: EditStarship,
    },
    {
      path: 'vehicles',
      component: Vehicles,
    },
    {
      path: 'vehicles/edit/:id',
      component: EditVehicle,
    },
    {
      path: 'species',
      component: Species,
    },
    {
      path: 'species/edit/:id',
      component: EditSpecie,
    },
    { path: '**', redirectTo: 'movies', pathMatch: 'full' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
