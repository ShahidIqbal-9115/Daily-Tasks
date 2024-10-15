import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api='http://192.168.1.43:3000/api/users';
  dataSource:any[]=[];
  patchId!:number;
  formtype!:any;
  constructor(private http:HttpClient) { }

   getAllData():Observable<any>{
    return this.http.get(this.api)
   }

   adddataToApi(obj:any):Observable<any>{
    return this.http.post(`${this.api}/signup`,obj)
   }

   updateDataByID(id:number,obj:any):Observable<any>{
    return this.http.put(`${this.api}/${id}`,obj)
   }

   DeleteByID(id:number):Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
   }

   getById(id:number):Observable<any>{
    return this.http.get(`${this.api}/${id}`)
   }


}
