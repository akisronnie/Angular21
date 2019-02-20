import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'players'
})
export class PlayersPipe implements PipeTransform {

public transform(value: [], ): number {
  if (value) {
    return Object.values(value).length;
  } else { return 0; }

 }
}