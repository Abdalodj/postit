import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit , OnDestroy{

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPost();
    this.postsService.emitPosts()
  }

  onRemovePost(post: Post){
    this.postsService.removePost(post);
  }

  postColor(post: Post): string {
    if (post.love > 0) {
      return "list-group-item list-group-item-success";
    } else if(post.love < 0) {
      return "list-group-item list-group-item-danger";
    }else {
      return "list-group-item";
    }
  }

  loveControl(choice: number, index: number): void {
    this.posts[index].love = this.posts[index].love + choice;
    //this.postColor(this.posts[index]);
    this.postsService.savePosts();
  }
  datee(post: Post){
    return new Date(post.creationDate.year,
      post.creationDate.month,
      post.creationDate.day,
      post.creationDate.hours,
      post.creationDate.minutes);
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
