import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from '@shared/models/posts.interfaces';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor (private http: HttpClient) { }

  get(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.urls.getCommentsByPost(postId));
  }
  
}
