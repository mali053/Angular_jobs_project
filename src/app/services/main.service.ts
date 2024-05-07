import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobFields } from '../models/jobFileds';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getUserFromStorage(): any | null {
    try {
      const userString = localStorage.getItem('user');
      if (userString) {
        return JSON.parse(userString);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  getCurrentUserName(): string {
    const userObj = this.getUserFromStorage();
    if (userObj && userObj.userName) {
      return userObj.userName;
    }
    return "guest";
  }

  getJobFieldToSearch() {
    const userObj = this.getUserFromStorage();
    if (userObj && userObj.jobSearchField) {
      return jobFields[userObj.jobSearchField];
    }
    else {
      return "";
    }
  }

  UserIsLoggedIn(): boolean {
    try {
      const userString = localStorage.getItem('user');
      return !!userString;
    } catch (e) {
      return false;
    }
  }
}
