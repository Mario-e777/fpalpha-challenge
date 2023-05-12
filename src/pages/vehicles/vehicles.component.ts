import { Component, Input } from '@angular/core';
import { SWService } from '../../services/sw.service';
import { Vehicle } from './vehicles.model';
import { cleanURL } from 'src/shared/pipes/clean-url.pipe';

@Component({
  selector: 'sw-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class Vehicles {
  @Input() vehiclesByMovie: Array<Vehicle> = [];
  vehiclesByMovieEditRoute: string = '';
  vehiclesToCheckEdit: Array<Vehicle> = [];
  vehicles: Array<Vehicle> = [];
  tableHeaders: Array<string> = ['Name', 'Model', 'Vehicle Class', 'Cost in Credits'];
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  constructor(
    private SWService: SWService
  ) { }

  ngOnInit() {
    if (!!this.vehiclesByMovie.length) {
      this.vehiclesToCheckEdit = this.vehiclesByMovie;
      this.checkEditedCharacters();
      this.vehicles = this.vehiclesToCheckEdit;
      this.vehiclesByMovieEditRoute = '/vehicle/';
    } else {
      this.getVehiclesByPage();
    }
  }

  checkEditedCharacters() {
    const VEHICLES_IDS = this.vehiclesToCheckEdit.map(vehicle => {
      return new cleanURL().transform(vehicle.url, 'vehicles').replaceAll('/', '');
    });
    VEHICLES_IDS.map((vehicleId, index) => {
      const VEHICLE = localStorage.getItem('Vehicle' + vehicleId);
      if (VEHICLE) this.vehiclesToCheckEdit[index] = JSON.parse(VEHICLE);
    });
  }

  getVehiclesByPage(page: number = 1) {
    this.SWService.getAllVehicles(page).subscribe(vehicles => {
      this.vehiclesToCheckEdit = [...vehicles.results];
      this.checkEditedCharacters();
      this.hasNextPage = !!vehicles.next;
      this.hasPrevPage = !!vehicles.previous;
      this.vehicles = this.vehiclesToCheckEdit;
    });
  }
}
