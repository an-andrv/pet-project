import { Component, OnDestroy, OnInit } from '@angular/core';

import { PostsService } from '@shared/services/posts.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from '../models/posts.interfaces';

const POSTS_MAX_COUNT = 12;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  private onDestroy$ = new Subject<boolean>();

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.get().pipe(takeUntil(this.onDestroy$)).subscribe(posts => {
      this.posts = posts.slice(0, POSTS_MAX_COUNT);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
