import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, finalize, delay } from 'rxjs/operators';

import { PostsService } from '@shared/services/posts.service';
import { PostsActions } from './posts.actions';
import { Store } from '@ngrx/store';
 
@Injectable()
export class PostsEffects {
 
  loadPostsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getData),
      mergeMap(() => {
        return this.postsService.getAll().pipe(
          delay(1000),
          map(posts => {
            return PostsActions.getDataSuccess({ data: posts })
          }),
          catchError(() => EMPTY)
        )
      })
    )
  );
 
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store$: Store
  ) {}
}