import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ServicesService } from '../services.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  dataForTable: any[] = [];
  res: boolean = false;
  dataForTabletow: any[] = [];

  constructor(private ser: ServicesService, private router: Router) { }

  ngOnInit() {
// most recomend 
    this.ser.getAllData().pipe(
      concatMap((api1Data) => {
        this.dataForTable = api1Data;
        return this.ser.getAllData();  
      })
    ).subscribe((api2Data: any) => {
      this.dataForTabletow = api2Data;
    }, error => {
      console.error('Error in API call:', error);
    });
 
// second way 
  // this.ser.getAllData().subscribe(
  //   (response) => {
  //     this.dataForTable = response;  
  //     if (response) {
  //       this.ser.getAllData().subscribe(
  //         (response) => {
  //           this.dataForTabletow = response;
  //         },
  //         (error) => {
  //           console.error('Error fetching data', error);
  //         }
  //       );
  //     }
  //   },
  //   (error) => {
  //     console.error('Error fetching data', error);
  //   }
  // );
}


TableHeading: any[] = ['id',
  'name',
  'email',
];

  
}
