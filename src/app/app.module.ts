import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import {PostService} from './services/post.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const appRoute: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new', component: NewPostComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'post'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
