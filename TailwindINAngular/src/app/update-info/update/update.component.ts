import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { RouteGardServicetoinfo } from '../../route-gardtoinfo-update.service';

interface TypeList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,MatSelect,MatAutocompleteModule, CommonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatRadioButton ,MatTableModule, MatIconModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  typeList: TypeList[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'User', viewValue: 'User'},
  ];

  constructor(private services:ServicesService,private router: Router,private routeGardToInfo:RouteGardServicetoinfo) { }

  ngOnInit() {
    this.routeGardToInfo.cannavitoinfo=false;
    let dataFromLocal = this.services.get('tolocal');

    dataFromLocal.forEach((item: any) => {
      if (item.email == this.services.dataToUpdate) {
        this.registerationForm.patchValue(item);
      }
    });
   
  }

  onclose(){
    this.router.navigate(['']);
  }

  registerationForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  
  Match: boolean = false;
  roleshow: boolean = false;

  onSubmit() {
    if (this.registerationForm.invalid) {
      // alert("Fill Form");
    } else {
      if (this.registerationForm.value.password !== this.registerationForm.value.confirmPassword) {
        this.Match = true;
      } else {
        if (this.registerationForm.value.role == 'user' || this.registerationForm.value.role == 'admin' || this.registerationForm.value.role == 'User' || this.registerationForm.value.role == 'Admin') {
          let dataFromLocal = this.services.get('tolocal');
          dataFromLocal.forEach((item: any, index: any) => {
            if (item.id == this.registerationForm.value.id) {
              dataFromLocal[index] = this.registerationForm.value;
              this.services.currentUser=item.email;
            }
          });
          this.services.set('tolocal', dataFromLocal);
          this.router.navigate(['']);
        } else {  
          this.roleshow = true;
        }
      }
    }
  }

  hide = true;
  clickEvent() {
    this.hide = !this.hide;
  }
}
