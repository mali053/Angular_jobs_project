import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  private cvCountSubject = new BehaviorSubject<number>(0);
  cvCount = this.cvCountSubject.asObservable();

  addCV(){
    this.cvCountSubject.next(this.cvCountSubject.value+1)
  }
}
