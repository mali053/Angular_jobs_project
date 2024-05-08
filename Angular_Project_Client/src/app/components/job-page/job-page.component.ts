import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss']
})
export class JobPageComponent implements OnInit {
  jobListToView: Job[] = [];
  jobList: Job[] = [];
  filterDetails: any = null;

  constructor(private route: ActivatedRoute, private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getJobsFromServer().subscribe(jobs => {
      this.jobListToView = jobs;
      
      // Subscribe to route parameter changes
      this.route.paramMap.subscribe(params => {
        const field = params.get('field');
        if (field) {
          this.filterDetails = { area: null, field };
          this.Filter();
        }
      });
    });
  }

  filterChange(event: any) {
    this.filterDetails = event;
    this.Filter();
  }

  Filter() {
    this.jobListToView = this.jobsService.filterJobs(this.filterDetails.area, this.filterDetails.field);
  }
}
