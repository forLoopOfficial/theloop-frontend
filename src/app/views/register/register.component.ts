import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  registerUser() {
    console.log(this.user);
    this.authService.register(this.user)
      .then((res) => this.router.navigate(['/']))
      .catch((err) => {
        console.log("error", err);
      })
  }

  ngOnInit() {
  }

}
