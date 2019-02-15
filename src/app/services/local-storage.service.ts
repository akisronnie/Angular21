import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {

  public getItem(itemName: string): TPlayer {
    return JSON.parse(localStorage.getItem(itemName));
  }

  public setItem(itemName: string, item: TPlayer): void {
    localStorage.setItem(itemName, JSON.stringify(item));
  }
}
