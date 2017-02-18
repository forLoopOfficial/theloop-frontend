import {Component, OnInit, Input} from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  constructor(
    private postsService:PostsService
  ) { }

  likePost() {
    this.postsService.likePost(this.post.id)
      .then((res:any) => {
        const updatedPost = res.post;
        updatedPost.user = res.user;
        this.post = updatedPost;
      })
  }

  ngOnInit() {}

}
