import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private api='https://jsonplaceholder.typicode.com/posts/1/comments';
  dataSource:any[]=[];
  patchId!:number;
  formtype!:any;
  constructor(private http:HttpClient) { }

   getAllData():Observable<any>{
    return this.http.get(this.api)
   }

   
 


}
