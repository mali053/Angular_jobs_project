import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobFields } from '../../models/jobFileds';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  area: string | undefined;
  field: jobFields | undefined;

  @Input() search: boolean = false;
  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private activeRouter: ActivatedRoute){}

  filter() {
    this.filterChange.emit({ area: this.area, field: this.field });
  }

  //convert the enum values to array of strings and return the array
  getField(){
    return Object.values(jobFields).filter(value => typeof value === 'string');
  }  

  showSearch()
  {
    this.search = !this.search
  }
}
