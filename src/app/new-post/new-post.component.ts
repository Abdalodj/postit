import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {Dates} from '../models/dates';
import {Post} from '../models/post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const currentDate = new Date();
    const id = this.postsService.nextId()
    const newPost = new Post(
      id,
      title,
      content,
      new Dates(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDay(),
        currentDate.getHours(),
        currentDate.getMinutes()),
      0);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
