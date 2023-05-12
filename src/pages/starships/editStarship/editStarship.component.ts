import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "src/services/store.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'sw-edit-starship',
  templateUrl: './editStarship.component.html',
  styleUrls: ['./editStarship.component.css']
})
export class EditStarship {
  formGroup = new FormGroup({
    MGLT: new FormControl('', Validators.required),
    CargoCapacity: new FormControl('', Validators.required),
    Consumables: new FormControl('', Validators.required),
    CostInCredits: new FormControl('', Validators.required),
    Crew: new FormControl('', Validators.required),
    HyperdriveRating: new FormControl('', Validators.required),
    Length: new FormControl('', Validators.required),
    Manufacturer: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    MaxAtmospheringSpeed: new FormControl('', Validators.required),
    Model: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Passengers: new FormControl('', Validators.required),
    StarshipClass: new FormControl('', Validators.required)
  });
  @Input() URL: string = '';

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
    ) {
      this.formGroup.setValue({
        MGLT: this.route.snapshot.params['MGLT'],
        CargoCapacity: this.route.snapshot.params['cargo_capacity'],
        Consumables: this.route.snapshot.params['consumables'],
        CostInCredits: this.route.snapshot.params['cost_in_credits'],
        Crew: this.route.snapshot.params['crew'],
        HyperdriveRating: this.route.snapshot.params['hyperdrive_rating'],
        Length: this.route.snapshot.params['length'],
        Manufacturer: this.route.snapshot.params['manufacturer'],
        MaxAtmospheringSpeed: this.route.snapshot.params['max_atmosphering_speed'],
        Model: this.route.snapshot.params['model'],
        Name: this.route.snapshot.params['name'],
        Passengers: this.route.snapshot.params['passengers'],
        StarshipClass: this.route.snapshot.params['starship_class']
      });
    this.URL = this.route.snapshot.params['url'];
  }

  saveData() {
    this.storeService.saveData('Starship' + this.route.snapshot.params['id'], {
      MGLT: this.formGroup.get('MGLT')?.value,
      cargo_capacity: this.formGroup.get('CargoCapacity')?.value,
      consumables: this.formGroup.get('Consumables')?.value,
      cost_in_credits: this.formGroup.get('CostInCredits')?.value,
      crew: this.formGroup.get('Crew')?.value,
      hyperdrive_rating: this.formGroup.get('HyperdriveRating')?.value,
      length: this.formGroup.get('Length')?.value,
      manufacturer: this.formGroup.get('Manufacturer')?.value,
      max_atmosphering_speed: this.formGroup.get('MaxAtmospheringSpeed')?.value,
      model: this.formGroup.get('Model')?.value,
      name: this.formGroup.get('Name')?.value,
      passengers: this.formGroup.get('Passengers')?.value,
      starship_class: this.formGroup.get('StarshipClass')?.value,
      url: this.URL
    });
  }
}
