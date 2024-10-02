import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceForLocalService } from '../service-for-local.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { DialogOverviewExample } from '../dai-log/dai-log.component';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DialogOverviewExample,MatTableModule,MatButtonModule, MatDividerModule, MatIconModule,CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent { 

  DataFromLoacalStore: any;
  constructor(private togetDataFormStore: ServiceForLocalService) {
  // this.togetDataFormStore.getDataFromApi().subscribe(
  //     (response) => {
  //       this.DataFromLoacalStore =response;
  //       // console.log('Data received from API:', response);
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     },
  // )
    this.DataFromLoacalStore = this.togetDataFormStore.get('local');
  }


  TableHeading: any[] = [{ key: 'id', lable: 'ID' }, { key: 'name', lable: 'Name' }, { key: 'email', lable: 'Email' }, { key: 'phone', lable: 'Phone' }, { key: 'address', lable: 'Address' },
    // { key: 'street', lable: 'Street' },
     { key: 'actions', lable: 'Actions' }
    ];

  actions: any[] = ['View', 'Edit', 'Delete']

  Delete(itemId: any) {
    let userResponse = confirm("Do You Want to Delete This");
    if (userResponse) {
      this.DataFromLoacalStore.forEach((e: any, index: number) => {
        if (e.id == itemId) {
          this.DataFromLoacalStore.splice(index, 1);
        }
        this.togetDataFormStore.set('local',this.DataFromLoacalStore); 
      });
    }
  }

  RouterLink(lable:string): string {
    if (lable == "View" || lable =="Edit") {
      return '/forms';
    }  else {
      return '';
    }
  }

  call(id: any, lable: any) {
    if (lable == "View") {
      const objToView = this.DataFromLoacalStore.find((obj: any) => obj.id === id);
      this.togetDataFormStore.storeDataForPatch(objToView,lable);
    }
    if (lable == "Delete") {
      this.Delete(id);
    }
    if (lable == "Edit") {
      const objToView = this.DataFromLoacalStore.find((obj: any) => obj.id === id);
      this.togetDataFormStore.storeDataForPatch(objToView,lable);
    } 
  }


  remove() {
    let userResponse = confirm("Do You Want to Delete All Records");
    if (userResponse) {
      this.togetDataFormStore.remove('local');
      this.DataFromLoacalStore = this.togetDataFormStore.get('local');
    };
  }

  
}

