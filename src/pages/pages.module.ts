import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Movies } from './movies/movies.component';
import { Characters } from './characters/characters.component';
import { Planets } from './planets/planets.component';
import { Species } from './species/species.component';
import { Starships } from './starships/starships.component';
import { Vehicles } from './vehicles/vehicles.component';
import { EditCharacter } from './characters/editCharacter/editCharacter.component';
import { EditPlanet } from './planets/editPlanet/editPlanet.component';
import { EditSpecie } from './species/editSpecie/editSpecie.component';
import { EditStarship } from './starships/editStarship/editStarship.component';
import { EditVehicle } from './vehicles/editVehicle/editVehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    Movies,
    Characters,
    Planets,
    Species,
    Starships,
    Vehicles,
    EditCharacter,
    EditPlanet,
    EditSpecie,
    EditStarship,
    EditVehicle
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PagesModule { }
