import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
