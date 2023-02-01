import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, delay } from 'rxjs/operators';

import { PostsService } from '@shared/services/posts.service';
import { PostsActions } from './posts.actions';
 
@Injectable()
export class PostsEffects {
 
  loadPostsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap(() => {
        return this.postsService.getAll().pipe(
          delay(1000),
          map(posts => {
            return PostsActions.getPostsSuccess({ data: posts })
          }),
          catchError(() => EMPTY)
        )
      })
    )
  );
 
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
  ) {}
}