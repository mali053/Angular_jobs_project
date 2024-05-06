import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobFields } from '../models/jobFileds';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getCurrentUserName()
  {
    try{
      const userString = localStorage.getItem('user');
    if (userString) {
      const userObj = JSON.parse(userString);
      return userObj.userName;
    }
    else {
      return "guest";
    }
    }
    catch (e)  {
      return "guest";
    }
  }

  getJobFieldToSearch()
  {
    try{
      const userString = localStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        return jobFields[userObj.jobSearchField];
      }
      else{
        return "";
      }
    } 
    catch (e) {
      return "";
    }
  }
}
