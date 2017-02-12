import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {};

  constructor() { }

  ngOnInit() {

    this.user = {
      fullName: 'forLoop',
      username: 'forLoopNigeria',
      totalPosts: 997,
      totalLikes: 1024
    }

  }

}
