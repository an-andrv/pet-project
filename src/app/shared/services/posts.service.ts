import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@shared/models/posts.interfaces';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.urls.getPosts);
  }

}
