import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let backend: HttpTestingController;

  const mockPosts = [{
    userId: 1,
    id: 1,
    title: 'Post name',
    body: 'Post text'
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(PostsService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return some posts', () => {
    service.getAll().subscribe(posts => {
      expect(posts).toEqual(mockPosts);
    });

    backend.expectOne({
      method: 'GET',
      url: environment.urls.getPosts
    }).flush(mockPosts);
  });
});
