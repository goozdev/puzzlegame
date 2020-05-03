import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  private localStorageKey = 'hcl';
  private _highestCompletedLevel = new BehaviorSubject<number | undefined>(undefined);
  highestCompletedLevel$ = this._highestCompletedLevel.asObservable();

  constructor() {
    const localStorageValue = localStorage.getItem(this.localStorageKey);
    if (localStorageValue && !isNaN(localStorageValue as any)) {
      this._highestCompletedLevel.next(+localStorageValue);
    }
   }

  public get highestCompletedLevel() {
    return this._highestCompletedLevel.value;
  }

  public set highestCompletedLevel(value: number) {
    this._highestCompletedLevel.next(value);
    localStorage.setItem(this.localStorageKey, `${value}`);
  }
}
