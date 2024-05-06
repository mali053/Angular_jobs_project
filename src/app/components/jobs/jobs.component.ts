import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { jobFields } from '../../models/jobFileds';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})

export class JobsComponent{

  @Input() jobsList: Job[] = [];

  // constructor(private jobsService: JobsService){
  //   this.jobsList = jobsService.jobList;
  // }
  // ngOnInit(): void {
  //   this.jobsService.getJobsFromServer()
  // }

//   getJobs(){
//     this.jobsService.getJobsFromServer().subscribe((jobs: Job[]) => {
//     this.jobsList = jobs;
//   })
// }

  // getJobField(){
  //   return jobFields
  // }
}
