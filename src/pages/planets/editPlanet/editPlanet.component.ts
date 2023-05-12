import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "src/services/store.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'sw-edit-planet',
  templateUrl: './editPlanet.component.html',
  styleUrls: ['./editPlanet.component.css']
})
export class EditPlanet {
  formGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    RotationPeriod: new FormControl('', Validators.required),
    OrbitalPeriod: new FormControl('', Validators.required),
    Diameter: new FormControl('', Validators.required),
    Climate: new FormControl('', Validators.required),
    Gravity: new FormControl('', Validators.required),
    Terrain: new FormControl('', Validators.required),
    SurfaceWater: new FormControl('', Validators.required),
    Population: new FormControl('', Validators.required),
  });
  @Input() URL: string = '';

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {
    this.formGroup.setValue({
      Name: this.route.snapshot.params['name'],
      RotationPeriod: this.route.snapshot.params['rotation_period'],
      OrbitalPeriod: this.route.snapshot.params['orbital_period'],
      Diameter: this.route.snapshot.params['diameter'],
      Climate: this.route.snapshot.params['climate'],
      Gravity: this.route.snapshot.params['gravity'],
      Terrain: this.route.snapshot.params['terrain'],
      SurfaceWater: this.route.snapshot.params['surface_water'],
      Population: this.route.snapshot.params['population'],
    });
    this.URL = this.route.snapshot.params['url'];
  }

  saveData() {
    this.storeService.saveData('Planet' + this.route.snapshot.params['id'], {
      name: this.formGroup.get('Name')?.value,
      rotation_period: this.formGroup.get('RotationPeriod')?.value,
      orbital_period: this.formGroup.get('OrbitalPeriod')?.value,
      diameter: this.formGroup.get('Diameter')?.value,
      climate: this.formGroup.get('Climate')?.value,
      gravity: this.formGroup.get('Gravity')?.value,
      terrain: this.formGroup.get('Terrain')?.value,
      surface_water: this.formGroup.get('SurfaceWater')?.value,
      population: this.formGroup.get('Population')?.value,
      url: this.URL
    });
  }
}
