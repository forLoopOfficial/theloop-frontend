import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token/angular2-token";


@Injectable()
export class AuthService {

  constructor(
    private _tokenService: Angular2TokenService
  ) { }


  login(user:any) {
    return new Promise((resolve, reject) => {
      this._tokenService.signIn(user)
        .subscribe(res => resolve(res), error => reject(error));
    })
  }

  register(user:any) {
    return new Promise((resolve, reject) => {
      this._tokenService.registerAccount(user)
        .subscribe(res => resolve(res), error => reject(error));
    })
  }

  logout() {
    return new Promise((resolve, reject) => {
      this._tokenService.signOut()
        .subscribe(res => resolve(res), error => reject(error));
    })
  }

  validateToken() {
    return new Promise((resolve, reject) => {
      this._tokenService.validateToken()
        .subscribe(res => resolve(res), error => reject(error));
    })
  }






}
