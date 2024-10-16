import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ServiceService } from '../service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule,MatTableModule,MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive ,MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',

})
export class TableComponent {
  dataForTable: any[] = [];

  constructor(private ser:ServiceService,private router:Router){ }

  ngOnInit(){ 
    this.ser.getAllData().subscribe(
      (response) => {
        this.dataForTable = response;  
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }


  TableHeading: any[] = ['id',
    'name',
    'email',
    'phone',
    'role',
    'actions',
  ];
  actions: any[] = [
    { key: 'view', lable: 'View' },
    { key: 'edit', lable: 'Edit' },
    { key: 'delete', lable: 'Delete' }
  ];

  
  RouterLink(lable: string,id:any): string {
    if (lable == "View" || lable == "Edit") {
      return `/forms/${lable}/${id}`;
    } else {
      return '/table';
    }
  }

  call(id: any, lable: any) {
    if (lable == "View") {
      // alert(lable);
      this.ser.patchId=id;
      this.ser.formtype=lable;
      // const objToView = this.DataFromLoacalStore.find((obj: any) => obj.id === id);
      // this.togetDataFormStore.storeDataForPatch(objToView, lable);
    }
    if (lable == "Delete") {
      this.ser.DeleteByID(id).subscribe();
      this.router.navigate(['/table']);
    }
    if (lable == "Edit") {
      // alert(lable);
      this.ser.patchId=id;
      this.ser.formtype=lable;
      // const objToView = this.DataFromLoacalStore.find((obj: any) => obj.id === id);
      // this.togetDataFormStore.storeDataForPatch(objToView, lable);
    }
  }
}
