import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noUndef'
})

export class NoUndefPipe implements PipeTransform {

  transform(room: TRoom, args?: any): any {
    if (room.players === undefined) { return 0; }
    return Object.keys(room.players).length;
  }

}