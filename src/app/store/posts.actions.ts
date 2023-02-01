import { createAction, props } from '@ngrx/store';
import { Post } from '@shared/models/posts.interfaces';

export namespace PostsActions {
  export const increaseRate = createAction('[Rate] Increment', props<{ userId: number, postId: number }>());
  export const decreaseRate = createAction('[Rate] Decrement', props<{ userId: number, postId: number }>());
  export const getPosts = createAction('[Posts] Get data of posts');
  export const getPostsSuccess = createAction('[Posts] Get data of posts success', props<{ data: Post[] }>());
}
 