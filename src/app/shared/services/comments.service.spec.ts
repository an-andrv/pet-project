import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';

import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  let service: CommentsService;
  let backend: HttpTestingController;

  const postId = 1;
  const mockComments = [{
    postId: 1,
    id: 1,
    name: 'Name',
    email: 'name@mail.com',
    body: 'Post text'
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CommentsService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return comments of the post', () => {
    service.getAll(postId).subscribe(posts => {
      expect(posts).toEqual(mockComments);
    });

    backend.expectOne({
      method: 'GET',
      url: environment.urls.getCommentsByPost(postId)
    }).flush(mockComments);
  });
});
