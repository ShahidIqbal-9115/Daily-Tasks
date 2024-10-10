import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { TableadminComponent } from '../tableadmin/tableadmin.component';
import { TableuserComponent } from '../tableuser/tableuser.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';
import {MatTableModule} from '@angular/material/table';

// import { MatIconModule } from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTableModule } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatSortModule } from '@angular/material/sort';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TableadminComponent,TableuserComponent,CommonModule,MatTableModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit  {

  @ViewChild('formTemplate', { read: ViewContainerRef }) formRef!: ViewContainerRef;

  dataSource:any=[];
  datatoshow:any=[];
  localstore:any=[];

  constructor(private router:Router,private componentFactoryResolver: ComponentFactoryResolver,private services:ServicesService){
     this.localstore=this.services.get('tolocal');  
  }

  ngOnInit(): void {
  }

  TableHeading: any[] = ['id',
    'name',
    'email',
    'phone',
    'role',
  ]


  RendertableAdmin() {  
    this.dataSource = this.localstore.filter((item:any) => item.role === 'admin'||item.role=='Admin');
  
  }

  RendertableUser() {
    this.dataSource = this.localstore.filter((item:any) => item.role === 'user'||item.role=='User');
  }

  LogOut(){
    this.router.navigate(['']);
  }
}
