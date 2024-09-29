import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceForLocalService {
  private storedData: any;
  private actionLable:any;

  constructor() { }

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
