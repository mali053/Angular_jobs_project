import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { jobFields } from '../../models/jobFileds';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private jobService: JobService){}

  @Input('jobData') jobData:Job| null = null
  jobFileds = jobFields
  showDetails: boolean =false;

  ShowDetails(){
    this.showDetails=!this.showDetails;
  }

  getField() {
    if (this.jobData) {
      console.log('kk',this.jobData);
      
      const x= jobFields[this.jobData.jobField];
      console.log(x);
      
      return x;
    }
    return "Unknown";
  }

  addCV() {
    this.jobService.addCV()
  }
}
