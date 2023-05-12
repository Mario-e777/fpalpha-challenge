import { Pipe, PipeTransform } from '@angular/core';
import { abbreviateNumber } from "js-abbreviation-number";

/* Remove the base API path to extract the ID of each element to edit */
@Pipe({ name: 'cleanURL' })
export class cleanURL implements PipeTransform {
  private baseURL: string = 'https://swapi.dev/api/';
  transform(value: string, path: string = ''): string {
    return value.replace(this.baseURL + path, '');
  }
}
