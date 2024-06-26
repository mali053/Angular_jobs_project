import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent implements OnInit {

  constructor(private mainService: MainService, private jobService: JobService, private router: Router){}

  numOfCV:number = 0;

  ngOnInit() {
    this.jobService.cvCount.subscribe(count => this.numOfCV = count);

    if (this.UserIsLoggedIn()) {
      this.router.navigate(['/jobs']); // Navigate to home component
    } else {
      this.router.navigate(['/login']); // Navigate to login component
    }
  }

  getUserName(): string {
    return this.mainService.getCurrentUserName();
  }

  getJobField(): string{
    return this.mainService.getJobFieldToSearch();
  }

  UserIsLoggedIn(): boolean {
    return this.mainService.UserIsLoggedIn()
  }
}

