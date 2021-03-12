import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  username = '';
  password = '';

  ngOnInit(): void {
  }

  private authenticationCheck(): void{

  }

  onLogInButton(): void{
    console.log(this.username);
    console.log(this.password);
  }

  onSignInButton(): void{
    this.authenticationCheck();
    console.log(this.username);
    console.log(this.password);
  }

}
