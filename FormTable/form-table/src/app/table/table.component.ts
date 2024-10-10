import { Component, inject, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceForLocalService } from '../service-for-local.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DialogOverviewExampleDialog } from '../dai-log/dai-log.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';


import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { window } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatPaginatorModule, DialogOverviewExampleDialog, MatSortModule, MatTableModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './table.component.css'
})
export class TableComponent {

 public DataFromLoacalStore: any;
  constructor(private togetDataFormStore: ServiceForLocalService, private cdref:ChangeDetectorRef) {
    // this.togetDataFormStore.getDataFromApi().subscribe(
    //     (response) => {
    //       this.DataFromLoacalStore =response;
    //       this.dataSource = new MatTableDataSource(this.DataFromLoacalStore);
    //       // console.log('Data received from API:', this.DataFromLoacalStore);

    //       setTimeout(() => {
    //         this.cdref.detectChanges();
    //       }, 5000);
    //       // console.log(response);
          
          
    //     },
    //     (error) => {
    //       console.error('Error fetching data:', error);
    //     },
    // )

    this.DataFromLoacalStore = this.togetDataFormStore.get('local');

  }

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.togetDataFormStore.getDataFromApi().subscribe(
      (response) => {
      console.log(response);
        setTimeout(() => {
          this.cdref.detectChanges();
        }, 5000);        
      },
      (error) => {
        console.error('Error fetching data:', error);
      },
  )
    this.dataSource = new MatTableDataSource(this.DataFromLoacalStore);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // TableHeading: any[] = [{ key: 'id', lable: 'ID' }, { key: 'name', lable: 'Name' }, { key: 'email', lable: 'Email' }, { key: 'phone', lable: 'Phone' }, { key: 'address', lable: 'Address' },
  // // { key: 'street', lable: 'Street' },
  // { key: 'actions', lable: 'Actions' }
  // ];

  TableHeading: any[] = ['id',
    'name',
    'email',
    'phone',
    'address',
    // 'website',
    'actions',
  ]

  actions: any[] = [
    { key: 'view', lable: 'View' },
    { key: 'edit', lable: 'Edit' },
    { key: 'delete', lable: 'Delete' }
  ]

  Delete(itemId: any) {
    // delete Form Api

    this.togetDataFormStore.deleteDataFromApi(itemId);

    // if (this.togetDataFormStore.respones==true) {
    this.DataFromLoacalStore.forEach((e: any, index: number) => {
      if (e.id == itemId) {
        this.DataFromLoacalStore.splice(index, 1);
      }
      this.togetDataFormStore.set('local', this.DataFromLoacalStore);
    });
    // }
    this.openDialogConfrim();
  }


  RouterLink(lable: string,id:any): string {
    if (lable == "View" || lable == "Edit") {
      return `/forms/${lable}/${id}`;
    } else {
      return '/table';
    }
  }

  call(id: any, lable: any) {
    if (lable == "View") {
      const objToView = this.DataFromLoacalStore.find((obj: any) => obj.id === id);
      this.togetDataFormStore.storeDataForPatch(objToView, lable);
    }
    if (lable == "Delete") {
      this.Delete(id);
    }
    if (lable == "Edit") {
      const objToView = this.DataFromLoacalStore.find((obj: any) => obj.id === id);
      this.togetDataFormStore.storeDataForPatch(objToView, lable);
    }
  }


  remove() {
    let userResponse = confirm("Do You Want to Delete All Records");
    if (userResponse) {
      this.togetDataFormStore.remove('local');
      this.DataFromLoacalStore = this.togetDataFormStore.get('local');
    };
  }


  readonly dialog = inject(MatDialog);

  //   openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //   });

  //   dialogRef.afterClosed().subscribe();
  // };

  openDialogConfrim(): void {
    const dialogRef = this.dialog.open(DialogOverviewExample, {
    });

    setTimeout(() => {
      dialogRef.close();
    }, 1000);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }
}


@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'Dailog.html',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverviewExample {

  constructor(private togetDataFormStore: ServiceForLocalService) {
  }
  readonly dialog = inject(MatDialog);
  openDialogConfrim(): void {
    const dialogRef = this.dialog.open(DialogOverviewExample, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  delete() {
    this.togetDataFormStore.responesCall();

  }


}




