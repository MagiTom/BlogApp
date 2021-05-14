import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from './shared/post';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string = 'http://localhost:3000';
  posts$:Observable<any>;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }  


public getBlogs():Observable<Post>{

  return this.http.get<Post>(this.url + '/posts')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

public getBlog(id:number | string):Observable<Post>{
return this.http.get<Post>(this.url + '/posts/' + id)
.pipe(
  retry(1),
  catchError(this.handleError)
)
}

public addBlog(blog):Observable<Post>{
  return this.http.post<Post>(this.url + '/posts', JSON.stringify(blog), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

updateBlog(id:number, blog:Post): Observable<Post> {
  return this.http.put<Post>(this.url + '/posts/' + id, JSON.stringify(blog), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

deleteBlog(id:number){
  return this.http.delete<Post>(this.url + '/posts/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}
