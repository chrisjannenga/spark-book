import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isLoggedIn = false;

  checkLoginStatus() {
    if (this.isLoggedIn === true) {
      console.log('I am Logged in!')
    } else {
      console.log('I am not logged in!')
    }
  }

  constructor() {

  }

  ngOnInit() {

  }

}
