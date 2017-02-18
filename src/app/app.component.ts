import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token/angular2-token";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(
    private _tokenService: Angular2TokenService
  ) {

    this._tokenService.init({
      apiBase: 'https://the-loop-api.herokuapp.com',
      apiPath: 'api',
      signInRedirect: 'login',
      globalOptions: {
        headers: {
          'Content-Type':  'application/json',
          'Accept':  'application/json',
          "access_token_name": localStorage.getItem('accessToken'),
          "client_name": localStorage.getItem('client'),
          "uid_name": localStorage.getItem('uid')
        }
      }
    });
  }

}
