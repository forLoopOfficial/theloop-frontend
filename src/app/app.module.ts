import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AppRouting } from "./app.routing";
import { HeaderComponent } from './modules/header/header.component';
import { UserComponent } from './modules/user/user.component';
import { FeedComponent } from './modules/feed/feed.component';
import { PostComponent } from './modules/post/post.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthService } from "./services/auth.service";
import { PostsService } from "./services/posts.service";
import { AboutComponent } from './modules/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    FeedComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [
    Angular2TokenService,
    AuthService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
