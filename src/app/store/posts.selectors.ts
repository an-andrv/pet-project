import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./posts.reducer";

export namespace PostsSelectors {
  export const state = createFeatureSelector<State>("posts");

  export const rate = createSelector(state, (state) => state.rate);
  export const userId = createSelector(state, (state) => state.userId);
  export const postId = createSelector(state, (state) => state.postId);
  export const getPosts = createSelector(state, (state) => state.data);
  export const loading = createSelector(state, (state) => state.loading);
}
