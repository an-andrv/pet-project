import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsActions } from '@app/store/posts.actions';
import { PostsSelectors } from '@app/store/posts.selectors';
import { Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { Post } from '../../shared/models/posts.interfaces';

const POSTS_MAX_COUNT = 12;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  maxCountPosts = POSTS_MAX_COUNT;
  rate$: Observable<number>;
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;

  private onDestroy$ = new Subject<boolean>();

  constructor(private store$: Store) {
    this.posts$ = this.store$.select(PostsSelectors.getData)
    this.rate$ = this.store$.select(PostsSelectors.rate);
    this.loading$ = this.store$.select(PostsSelectors.loading);
  }

  ngOnInit(): void {
    this.store$.dispatch(PostsActions.getData());
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
