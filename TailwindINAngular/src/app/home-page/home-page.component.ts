import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,MatTableModule],
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
     this.dataSource=this.localstore;
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
