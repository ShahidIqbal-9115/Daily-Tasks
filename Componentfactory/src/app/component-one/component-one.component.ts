import { Component, ChangeDetectionStrategy,inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';


@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [MatDialogModule],
  // control by defult change in Component
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOneComponent {

  constructor(public dialogRef: MatDialogRef<ComponentOneComponent>, private cdref:ChangeDetectorRef) {
   
    setTimeout(() => {
          // dialogRef.close();
          // detect changes after 2sec 
          this.cdref.detectChanges();
    }, 2000);
    //  dialogRef.afterClosed().subscribe(result => {
    //   alert(result);
    // });
  }
  readonly dialog:any = inject(MatDialog);
  

  title:string='This is Component One';

  currentData(){
    return new Date();
  }
}
