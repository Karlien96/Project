import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  static counter = 61;
}

/*
  export class CounterService {
    counter : number = 60;
    secondsSubject : Subject<number> = new Subject<number>();
    // volgende liijn in andere typescript file
    seconds = this.secondsSubject.asObservable();

    constructor() {
      setInterval(() => {
        this.secondsSubject.next(this.counter);
      }, 1000);
    }
  }
*/