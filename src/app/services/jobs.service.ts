import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {}

  
  getJobsFromServer(): Observable<Job[]> {
    return this.http.get<Job[]>('https://localhost:44337/api/Job/GetAllJobs',) as Observable<Job[]>
  }
}
