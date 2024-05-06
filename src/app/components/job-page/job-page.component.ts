import { Component } from '@angular/core';
import { Job } from '../../models/job';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.scss'
})
export class JobPageComponent {

  constructor(private jobsService: JobsService){}

  ngOnInit(): void {
    this.jobsService.getJobsFromServer().subscribe(() => this.jobListToView = this.jobsService.jobList);
  }

  jobListToView:Job[] =[]

  filterDetails:any = null

  filterChange($event:any){
    this.filterDetails = $event;
    this.Filter();
  }

  Filter(){
    this.jobListToView = this.jobsService.filterJobs(this.filterDetails.area, this.filterDetails.field);
  }

}
