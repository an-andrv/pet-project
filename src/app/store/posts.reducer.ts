import { Action, createReducer, on } from "@ngrx/store";
import { Post } from "@shared/models/posts.interfaces";
import { PostsActions } from "./posts.actions";

export interface State {
  rate: number;
  userId: number;
  postId: number;
  data: Post[];
  loading: boolean;
}

const initialState: State = {
  userId: 1,
  postId: 1,
  rate: 0,
  data: [],
  loading: false
};

const rateReducer = createReducer(
  initialState,
  on(PostsActions.increaseRate, (state, { userId, postId }) => ({
    ...state,
    rate: state.rate + 1,
    userId, postId
  })),
  on(PostsActions.decreaseRate, (state, { userId, postId }) => ({
    ...state,
    rate: state.rate - 1,
    userId, postId
  })),
  on(PostsActions.getPosts, (state) => ({
    ...state,
    loading: true
  })),
  on(PostsActions.getPostsSuccess, (state, { data }) => ({
    ...state,
    data: data,
    loading: false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return rateReducer(state, action);
}
