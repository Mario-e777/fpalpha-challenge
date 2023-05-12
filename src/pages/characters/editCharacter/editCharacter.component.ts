import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "src/services/store.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'sw-edit-character',
  templateUrl: './editCharacter.component.html',
  styleUrls: ['./editCharacter.component.css']
})
export class EditCharacter {
  formGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Height: new FormControl('', Validators.required),
    Mass: new FormControl('', Validators.required),
    HairColor: new FormControl('', Validators.required),
    SkinColor: new FormControl('', Validators.required),
    EyeColor: new FormControl('', Validators.required),
    BirthYear: new FormControl('', Validators.required),
    Gender: new FormControl('', Validators.required),
  });
  @Input() URL: string = '';

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {
    this.formGroup.setValue({
      Name: this.route.snapshot.params['name'],
      Height: this.route.snapshot.params['height'],
      Mass: this.route.snapshot.params['mass'],
      HairColor: this.route.snapshot.params['hair_color'],
      SkinColor: this.route.snapshot.params['skin_color'],
      EyeColor: this.route.snapshot.params['eye_color'],
      BirthYear: this.route.snapshot.params['birth_year'],
      Gender: this.route.snapshot.params['gender'],
    });
    this.URL = this.route.snapshot.params['url'];;
  }

  saveData() {
    this.storeService.saveData('Character' + this.route.snapshot.params['id'], {
      name: this.formGroup.get('Name')?.value,
      height: this.formGroup.get('Height')?.value,
      mass: this.formGroup.get('Mass')?.value,
      hair_color: this.formGroup.get('HairColor')?.value,
      skin_color: this.formGroup.get('SkinColor')?.value,
      eye_color: this.formGroup.get('EyeColor')?.value,
      birth_year: this.formGroup.get('BirthYear')?.value,
      gender: this.formGroup.get('Gender')?.value,
      url: this.URL
    });
  }
}
