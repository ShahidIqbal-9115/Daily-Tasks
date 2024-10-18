import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserService {
  private  api='http://192.168.0.86:5000/search?name';
  
  constructor(private http:HttpClient) { }

  getinfo(search:any):Observable<any>{
    return this.http.get(`${this.api}=${search}`);
  }
}
