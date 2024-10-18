import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserService {
  private  api='https://jsonplaceholder.typicode.com/posts/1/comments';
  
  constructor(private http:HttpClient) { }

  getinfo(search:any):Observable<any>{
    return this.http.get(`${this.api}`);
  }
}
