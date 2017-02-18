import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = { }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  loginUser() {
    this.authService.login(this.user)
      .then((res:any) => this.router.navigate(['/']))
  }

  ngOnInit() {
  }

}
