import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent implements OnInit {

  constructor(private mainService: MainService, private jobService: JobService){}

  numOfCV:number = 0;

  ngOnInit() {
    this.jobService.cvCount.subscribe(count => this.numOfCV = count);
  }

  getUserName(): string {
    return this.mainService.getCurrentUserName();
  }

  getJobField(): string{
    return this.mainService.getJobFieldToSearch();
  }
}
