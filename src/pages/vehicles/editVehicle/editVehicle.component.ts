import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "src/services/store.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'sw-edit-vehicle',
  templateUrl: './editVehicle.component.html',
  styleUrls: ['./editVehicle.component.css']
})
export class EditVehicle {
  formGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Model: new FormControl('', Validators.required),
    Manufacturer: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    CostInCredits: new FormControl('', Validators.required),
    Length: new FormControl('', Validators.required),
    MaxAtmospheringSpeed: new FormControl('', Validators.required),
    Crew: new FormControl('', Validators.required),
    Passengers: new FormControl('', Validators.required),
    CargoCapacity: new FormControl('', Validators.required),
    Consumables: new FormControl('', Validators.required),
    VehicleClass: new FormControl('', Validators.required),
  });
  @Input() URL: string = '';

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {
    this.formGroup.setValue({
      Name: this.route.snapshot.params['name'],
      Model: this.route.snapshot.params['model'],
      Manufacturer: this.route.snapshot.params['manufacturer'],
      CostInCredits: this.route.snapshot.params['cost_in_credits'],
      Length: this.route.snapshot.params['length'],
      MaxAtmospheringSpeed: this.route.snapshot.params['max_atmosphering_speed'],
      Crew: this.route.snapshot.params['crew'],
      Passengers: this.route.snapshot.params['passengers'],
      CargoCapacity: this.route.snapshot.params['cargo_capacity'],
      Consumables: this.route.snapshot.params['consumables'],
      VehicleClass: this.route.snapshot.params['vehicle_class'],
    });
    this.URL = this.route.snapshot.params['url'];
  }

  saveData() {
    this.storeService.saveData('Vehicle' + this.route.snapshot.params['id'], {
      name: this.formGroup.get('Name')?.value,
      model: this.formGroup.get('Model')?.value,
      manufacturer: this.formGroup.get('Manufacturer')?.value,
      cost_in_credits: this.formGroup.get('CostInCredits')?.value,
      length: this.formGroup.get('Length')?.value,
      max_atmosphering_speed: this.formGroup.get('MaxAtmospheringSpeed')?.value,
      crew: this.formGroup.get('Crew')?.value,
      passengers: this.formGroup.get('Passengers')?.value,
      cargo_capacity: this.formGroup.get('CargoCapacity')?.value,
      consumables: this.formGroup.get('Consumables')?.value,
      vehicle_class: this.formGroup.get('VehicleClass')?.value,
      url: this.URL
    });
  }
}
