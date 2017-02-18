import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingHashtags: any[];

  constructor() { }

  ngOnInit() {

    this.trendingHashtags = [
      {
        name: 'instagram',
        posts: 1008660
      },
      {
        name: 'foo',
        posts: 4739247
      },
      {
        name: 'bar',
        posts: 523972
      },

    ]

  }

}
