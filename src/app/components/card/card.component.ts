import { Component, Input, OnInit } from '@angular/core';

import { Post, Comment } from '@shared/models/posts.interfaces';
import { ANIMATION_FLIP } from '@shared/constants/animations';
import { CommentsService } from '@shared/services/comments.service';
import { Store } from '@ngrx/store';
import { PostsActions } from '@app/store/posts.actions';

export const MIN_RATE = 0;
export const MAX_RATE = 10;
const randomDate = '2022-12-19';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [ANIMATION_FLIP],
})
export class CardComponent implements OnInit {
  @Input() post = {} as Post;
  
  comment: Comment = {} as Comment;
  isFlipped = false;
  rate: number = MIN_RATE;
  date: string = randomDate;

  constructor(private commentsService: CommentsService, private store$: Store) { }

  ngOnInit(): void {
    this.getFirstComment(this.post.id);
  }

  getFirstComment(postId: number) {
    this.commentsService.getAll(postId).subscribe(comments => {
      this.comment = comments[0];
    });
  }

  flip() {
    this.isFlipped = !this.isFlipped;
  }

  increaseRate() {
    if(this.rate < MAX_RATE) {
      this.rate++;
      this.store$.dispatch(PostsActions.increaseRate({userId: this.post.userId, postId: this.post.id}));
    }
  }

  decreaseRate() {
    if(this.rate > MIN_RATE) {
      this.rate--;
      this.store$.dispatch(PostsActions.decreaseRate({userId: this.post.userId, postId: this.post.id}));
    }
  }

}
