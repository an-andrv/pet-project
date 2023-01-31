import { Component, Input, OnInit } from '@angular/core';

import { Post, Comment } from '@shared/models/posts.interfaces';
import { ANIMATION_FLIP } from '@shared/constants/animations';
import { CommentsService } from '@shared/services/comments.service';


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
  date = '2022-12-19';

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getFirstComment(this.post.id);
  }

  getFirstComment(postId: number) {
    this.commentsService.get(postId).subscribe(comments => {
      this.comment = comments[0];
    });
  }

  click() {
    this.isFlipped = !this.isFlipped;
  }

}
