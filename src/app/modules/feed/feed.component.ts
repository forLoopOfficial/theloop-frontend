import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any[];

  newPost:string;
  characters:number = 140;

  constructor(
    private postsService:PostsService
  ) { }

  calculateCharactersLeft() {
    this.characters = 140 - this.newPost.length;
  }

  createPost() {
    const post = { body: this.newPost }
    this.postsService.createPost(post)
      .then((post) => {
        this.posts.unshift(post);
        this.newPost = '';
      })
  }


  getPosts() {
    this.postsService.getAllPosts().then((posts: any[]) => this.posts = posts);
  }

  ngOnInit() {

    this.posts = [];
    this.getPosts();
  }

}
