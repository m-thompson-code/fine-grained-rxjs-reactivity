import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly countSignal = signal(0);

  incSignal(): void {
    this.countSignal.update(prev => prev + 1);
  }

  private readonly countSubject = new BehaviorSubject(0);
  readonly countObservable = this.countSubject.asObservable();

  incObservable(): void {
    this.countSubject.next(this.countSubject.value + 1);
  }

  private readonly countSubject2 = new BehaviorSubject(0);
  readonly countObservable2 = this.countSubject2.asObservable();

  incObservable2(): void {
    this.countSubject2.next(this.countSubject2.value + 1);
  }
}
