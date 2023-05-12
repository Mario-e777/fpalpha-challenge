import { Pipe, PipeTransform } from '@angular/core';
import { abbreviateNumber } from "js-abbreviation-number";

/* Transform 1234 to 1.23k, and so on... */
@Pipe({ name: 'numberAbbrebiation' })
export class numberAbbrebiation implements PipeTransform {
  transform(value: string): string {
    const NUMBER_TO_ABBREBIATE = Number(value);
    if (isNaN(NUMBER_TO_ABBREBIATE)) return value;
    return abbreviateNumber(NUMBER_TO_ABBREBIATE, 2);
  }
}
