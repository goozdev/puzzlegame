import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  private _highestCompletedLevel = new BehaviorSubject<number | undefined>(undefined);
  highestCompletedLevel$ = this._highestCompletedLevel.asObservable();

  constructor() { }

  public get highestCompletedLevel() {
    return this._highestCompletedLevel.value;
  }

  public set highestCompletedLevel(value: number) {
    this._highestCompletedLevel.next(value);
  }
}
