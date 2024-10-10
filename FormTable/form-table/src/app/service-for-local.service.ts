import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceForLocalService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

  private storedData: any;
  private actionLable:any;

  constructor(private http: HttpClient) { }

  getDataFromApi(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postdataDataToApi(data:any): Observable<any> {
    return this.http.post<any>(`https://jsonplaceholder.typicode.com/posts`,data);
  }

  updataDataToApi(data:any,id:any): Observable<any> {
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${id}`,data);
  }

  deleteDataFromApi(id:any): Observable<any>{
    return this.http.delete<any>(`'https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  storeDataForPatch(data: any,lable:string): void {
    this.storedData = data;
    this.actionLable=lable;
  }


  getData(): any {
    return {data:this.storedData,action:this.actionLable};
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }


  respones:boolean=false;
  responesCall(){
   return this.respones=true;
  }


}
