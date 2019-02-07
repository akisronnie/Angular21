import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  public transform(value: {}, args:string[]) : any {
if (value !== undefined) {
  return Object.values(value);
}
    return [];
  }
}