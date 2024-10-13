import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {
  MatDialog,
} from '@angular/material/dialog';
import { RouteGardService } from '../route-gard.service';
import { RouteGardServicetoinfo } from '../route-gardtoinfo-update.service';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [
    trigger('slideToggleAnimation', [
      state('void', style({ width: '0', opacity: 0 })),
      state('*', style({ width: '*', opacity: 1 })),
      transition(':enter', [
        style({ width: '0', opacity: 0 }),
        animate('600ms ease-out', style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '*', opacity: 1 }),
        animate('300ms ease-in', style({ width: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class HomePageComponent {

  dataSource: any = [];
  localstore: any = [];
  profile: any;
  isVisible: boolean = true;

  constructor(private router: Router, private services: ServicesService,public dialog: MatDialog, private routeGard:RouteGardService,private routeGardtoinfo:RouteGardServicetoinfo) {
  
    this.localstore = this.services.get('tolocal');
    this.dataSource = this.localstore;
   
  }

  ngOnInit()  {
    this.routeGard.cannavitohome=false;
    if (this.services.currentUser!==null) {
      this.localstore.forEach((item: any) => {
        if (item.email == this.services.currentUser) {
          this.profile = item;
        }
      });
    }
  }


  profileUpdate() {
    this.routeGardtoinfo.cannavitoinfo=true;
    this.router.navigate(['/updateInfo']);
    this.localstore.forEach((item: any) => {
      if (item.email == this.services.currentUser) {
        this.services.dataToUpdate=this.profile.email;
      }
    });
  }

  toggleDisplay() {
    this.isVisible = !this.isVisible;
  }

 
  TableHeading: any[] = ['id',
    'name',
    'email',
    'phone',
    'role',
  ]

  RendertableAdmin() {
    this.dataSource = this.localstore.filter((item: any) => item.role === 'admin' || item.role == 'Admin');
  }

  RendertableUser() {
    this.dataSource = this.localstore.filter((item: any) => item.role === 'user' || item.role == 'User');
  }

  allRecords() {
    this.dataSource = this.localstore;
  }

  LogOut() {
    this.profile ='';
    this.routeGard.cannavitohome=false;
    this.router.navigate(['']);
  }

  login() {
    this.router.navigate(['']);
  }


  clear() {
    this.router.navigate(['/sginup']);
    this.services.remove('tolocal');
  }

}
