import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';
import { jobFields } from '../../models/jobFileds';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})

export class JobsComponent {

  constructor(private jobsService: JobsService){
    this.getJobs()
  }

  // ngOnInit(): void {
  //   this.jobsService.jobList.forEach(j => this.jobsToView.push(j))
  // }

  @Input() jobsList: Job[] = [];

  getJobs(){
    this.jobsService.getJobsFromServer().subscribe((jobs: Job[]) => {
    this.jobsList = jobs;
  })
}

  getJobField(){
    return jobFields
  }
}


// // jobs.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Job } from '../../models/job';
// import { JobFileds } from '../../models/jobFileds';
// import { JobsService } from '../../services/jobs.service';

// @Component({
//   selector: 'app-jobs',
//   templateUrl: './jobs.component.html',
//   styleUrls: ['./jobs.component.scss']
// })
// export class JobsComponent implements OnInit {

//   jobsList: Job[] = [];

//   constructor(private jobsService: JobsService) {}

//   ngOnInit(): void {
//     this.getJobs();
//   }

//   getJobs() {
//     this.jobsService.getJobsFromServer().subscribe((jobs: Job[]) => {
//       this.jobsList = jobs;
//     });
//   }
// }
