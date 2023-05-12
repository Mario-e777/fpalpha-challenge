import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "src/services/store.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'sw-edit-specie',
  templateUrl: './editSpecie.component.html',
  styleUrls: ['./editSpecie.component.css']
})
export class EditSpecie {
  formGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Classification: new FormControl('', Validators.required),
    Designation: new FormControl('', Validators.required),
    AverageHeight: new FormControl('', Validators.required),
    SkinColors: new FormControl('', Validators.required),
    HairColors: new FormControl('', Validators.required),
    EyeColors: new FormControl('', Validators.required),
    AverageLifespan: new FormControl('', Validators.required),
    Language: new FormControl('', Validators.required),
  });
  @Input() URL: string = '';

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {
    this.formGroup.setValue({
      Name: this.route.snapshot.params['name'],
      Classification: this.route.snapshot.params['classification'],
      Designation: this.route.snapshot.params['designation'],
      AverageHeight: this.route.snapshot.params['average_height'],
      SkinColors: this.route.snapshot.params['skin_colors'],
      HairColors: this.route.snapshot.params['hair_colors'],
      EyeColors: this.route.snapshot.params['eye_colors'],
      AverageLifespan: this.route.snapshot.params['average_lifespan'],
      Language: this.route.snapshot.params['language'],
    });
    this.URL = this.route.snapshot.params['url'];
  }

  saveData() {
    this.storeService.saveData('Specie' + this.route.snapshot.params['id'], {
      name: this.formGroup.get('Name')?.value,
      classification: this.formGroup.get('Classification')?.value,
      designation: this.formGroup.get('Designation')?.value,
      average_height: this.formGroup.get('AverageHeight')?.value,
      skin_colors: this.formGroup.get('SkinColors')?.value,
      hair_colors: this.formGroup.get('HairColors')?.value,
      eye_colors: this.formGroup.get('EyeColors')?.value,
      average_lifespan: this.formGroup.get('AverageLifespan')?.value,
      language: this.formGroup.get('Language')?.value,
      url: this.URL
    });
  }
}
