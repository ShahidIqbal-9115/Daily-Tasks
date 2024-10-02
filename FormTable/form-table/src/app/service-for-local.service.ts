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
}
