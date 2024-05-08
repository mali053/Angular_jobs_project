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
  @Input() CVList: Job[] = [];
  showCVList: boolean = false;

  jobCV($event: any){
    this.CVList.push($event);
 }

 ShowCVList(){
  this.showCVList = !this.showCVList
 }
}
