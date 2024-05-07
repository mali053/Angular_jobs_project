import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MainService } from '../../services/main.service';
import { RouterModule } from '@angular/router';


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

  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>()

  getUserName(): string {
    return this.mainService.getCurrentUserName();
  }

  getJobField(): string{
    return this.mainService.getJobFieldToSearch();
  }

  UserIsLoggedIn(): boolean {
    try {
      const userString = localStorage.getItem('user');
      return !!userString;
    } catch (e) {
      return false;
    }
  }

  filter(){
    this.filterChange.emit(this.getJobField());
  }
}

