import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpressionChangedService {

  private $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private $names: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {
  }

  get loading$(): Observable<boolean> {
    return this.$loading.asObservable();
  }

  get names$(): Observable<string[]> {
    return this.$names.asObservable();
  }

  loadData() {
    this.$loading.next(true);
    of([
      'Lorem ipsum dolor sit amet consectetur adipiscing',
      'Lorem ipsum dolor sit amet consectetur adipiscing',
      'Lorem ipsum dolor sit amet consectetur adipiscing'
    ])
      .pipe(delay(3000), tap(data => {
        this.$loading.next(false);
        this.$names.next(data);
      })).subscribe();
  }
}
