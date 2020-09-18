import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:typedef
export class PostService {

  posts = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPost()
  }

  emitPosts(): void {
    this.postsSubject.next(this.posts);
  }

  nextId(): number {
    this.getPost()
    console.log(this.posts);
    console.log(this.posts.length);
    console.log(this.posts[this.posts.length - 1]);
    return this.posts[this.posts.length - 1].id + 1;
  }

  savePosts(): void {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPost() {
    firebase.database().ref('/posts').
    on('value',
      (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
      });
  }

  createNewPost(newPost: Post): void {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl.id === post.id) {
          return true;
        }
      }
    );
    this.posts.splice(postToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
