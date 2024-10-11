import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatRadioButton, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatAutocompleteModule, MatIconModule, MatInputModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user: any = [];

  // radioForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private services: ServicesService, public dialog: MatDialog) {
    // this.radioForm = this.fb.group({
    //   selectedOption: ['Admin']  // Default value
    // });
    // this.getSelectedOption();

    // this.registerationForm.patchValue(this.services.dataToUpdate);



  }

  // getSelectedOption() {
  //   return this.radioForm.get('selectedOption')?.value;
  // }


  ngOnInit() {
    // let dataFromLocal = this.services.get('tolocal');

    // dataFromLocal.forEach((item: any) => {
    //   if (item.email == this.services.dataToUpdate) {
    //     this.registerationForm.patchValue(item);
    //     console.log(item);
    //   }
    // });
    // localStorage.setItem('user', JSON.stringify(this.user));
  }

  id: any = 1;

  registerationForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  // role() {
  //   this.registerationForm.value.role = this.getSelectedOption();
  //   console.log(this.registerationForm.value.role);
  // }

  Match: boolean = false;
  roleshow: boolean = false;

  onSubmit() {
    // this.registerationForm.value.role= this.getSelectedOption();
    if (this.registerationForm.invalid) {
      // alert("Fill Form");
    } else {
      if (this.registerationForm.value.password !== this.registerationForm.value.confirmPassword) {
        this.Match = true;
      } else {
        if (this.registerationForm.value.role == 'user' || this.registerationForm.value.role == 'admin' || this.registerationForm.value.role == 'User' || this.registerationForm.value.role == 'Admin') {
          let dataFromLocal = this.services.get('tolocal');
          if (dataFromLocal == null) {
            this.registerationForm.value.id = this.id;
            this.user.push(this.registerationForm.value);
            this.services.set('tolocal', this.user);
            this.dialog.open(saveDailog);
            setTimeout(() => {
              this.registerationForm.reset();
              this.router.navigate(['']);
            }, 1000);           
          } else {
            let dataFromLocal = this.services.get('tolocal');
            if (dataFromLocal.some((item:any) => item.email === this.registerationForm.value.email)) {
              alert('You already have an accoutn');
            } else{
              this.dialog.open(saveDailog);
              setTimeout(() => {
                this.registerationForm.reset();
                this.router.navigate(['']);
              }, 1000);
              this.registerationForm.value.id = dataFromLocal[dataFromLocal.length - 1].id + 1;
              dataFromLocal.push(this.registerationForm.value);
              this.services.set('tolocal', dataFromLocal);
            }
          }
        } else {
          this.roleshow = true;
        }
      }
    }
  }

  updateButton() {
    let localstore = this.services.get('tolocal');
    localstore.forEach((item: any, index: any) => {
      if (item.email == this.registerationForm.value.email) {
        localstore[index] = this.registerationForm.value;
      }
    });
  }

  remove() {
    this.services.remove('tolocal');
  }

  hide = true;
  clickEvent() {
    this.hide = !this.hide;
  }

}

@Component({
  selector: 'savedailog.html',
  standalone: true,
  imports: [MatDialogModule],
  // control by defult change in Component
  templateUrl: './savedailog.html',
  styleUrl: './sign-up.component.css'
})

export class saveDailog {

  constructor(public dialogRef: MatDialogRef<saveDailog>,) {
    setTimeout(() => {
      dialogRef.close();
    }, 1000);

  }
}
