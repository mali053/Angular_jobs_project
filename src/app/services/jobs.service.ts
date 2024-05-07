import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Job } from '../models/job';
import { jobFields } from '../models/jobFileds';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {
    
  }
  
  jobList!: Job[];

  getJobsFromServer(): Observable<Job[]> {
    return this.http.get<Job[]>('https://localhost:44337/api/Job/GetAllJobs')
      .pipe(
        map(res => {
          this.jobList = res;
          return res;
        })
      );
  }

  public get JobList() {
    return this.jobList
  }

  public filterJobs(area: string | null, field: string | null): Job[] {
    if (!this.jobList) {
      return []; // Return an empty array if jobList is not initialized
    }
    let f = this.jobList.filter(j =>
      (area == null || area == '' || j.area == area) &&
      (field == null || field == '' || jobFields[j.jobField] == field))
   return f;
  }

}
