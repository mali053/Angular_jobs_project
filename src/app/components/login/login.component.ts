import { Component } from '@angular/core';
import { User } from '../../models/user'
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService: LoginService){}

  username?: string
  password?: string
  
  user?: User

  userExist(): void {
    this.loginService.getUserByNameAndPassword(this.username, this.password)
      .subscribe();
  }
}
