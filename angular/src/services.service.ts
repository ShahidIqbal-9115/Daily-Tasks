import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  private data:any[]=[
    {"name":'Shahid',"rank":'Intern Developer'},
    {"name":'Bahadur',"rank":'Intern Developer'}
  ];

    private dataSource = new BehaviorSubject<any[]>(this.data); 
    data$:Observable<any[]> = this.dataSource.asObservable();

    constructor() {   }

  setData(newData: any) {
    this.data.push(newData);
    this.dataSource.next(newData); 
  }

  getData():any{
    return this.data
  }
}
