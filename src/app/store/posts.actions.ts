import { createAction, props } from '@ngrx/store';
import { Post } from '@shared/models/posts.interfaces';

export namespace PostsActions {
  export const increaseRate = createAction('[Rate] Increment', props<{ userId: number, postId: number }>());
  export const decreaseRate = createAction('[Rate] Decrement', props<{ userId: number, postId: number }>());
  export const getData = createAction('[Posts] Get data');
  export const getDataSuccess = createAction('[Posts] Get data success', props<{ data: Post[] }>());
}
 