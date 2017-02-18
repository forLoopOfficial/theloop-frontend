import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    email: "ire@ireaderinokun.com",
    password: "password"
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  loginUser() {
    console.log(this.user)
    this.authService.login(this.user)
      .then((res:any) => {
        console.log(res);
        this.router.navigate(['/']);
      })
      .catch(() => {
        console.log("error");
      })
  }

  ngOnInit() {
  }

}
