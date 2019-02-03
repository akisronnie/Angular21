import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noUndef'
})

export class NoUndefPipe implements PipeTransform {

  transform(value: TRoom, args?: any): any {
    if (value.players === undefined) { return 0; }
    return value.players.length;
  }

}