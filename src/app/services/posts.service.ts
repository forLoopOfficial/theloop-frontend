import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Angular2TokenService} from "angular2-token/angular2-token";

import 'rxjs/add/operator/map';

const dummyPosts = [
  {
    author: {
      fullName: 'Ire Aderinokun',
      username: 'iaderinokun',
    },
    likes: 12,
    content: 'Lorem ipsum dolor sit amet'
  },
  {
    author: {
      fullName: 'Timi Ajiboye',
      username: 'timigod',
    },
    likes: 1,
    content: 'Lorem ipsum dolor sit amet'
  },
  {
    author: {
      fullName: 'Ire Aderinokun',
      username: 'iaderinokun',
    },
    likes: 122,
    content: 'Lorem ipsum dolor sit amet'
  }
];

@Injectable()
export class PostsService {

  constructor(
    private http: Http,
    private _tokenService: Angular2TokenService
  ) {
  }


  getAllPosts() {
    return new Promise((resolve, reject) => {
      this._tokenService.get('posts')
        .map((res:any) => res.json())
        .subscribe(res => resolve(res), error => reject(error));
    });
  }

  createPost(post) {
    return new Promise((resolve, reject) => {
      this._tokenService.post('posts', post)
        .map((res:any) => res.json())
        .subscribe(res => resolve(res), error => reject(error));
    });
  }

  likePost(post_id) {
    const data = { post_id: post_id }
    return new Promise((resolve, reject) => {
      this._tokenService.post('likes', data)
        .map((res:any) => res.json())
        .subscribe(res => resolve(res), error => reject(error));
    });
  }


}
