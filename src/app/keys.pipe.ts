import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  public transform(value: {}, args:string[]) : any {

    return Object.values(value);
  }
}