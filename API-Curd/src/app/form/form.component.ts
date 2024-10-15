
import { Component ,ChangeDetectionStrategy, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatButton } from '@angular/material/button';

interface TypeList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatRadioButton,MatButton, MatSelect,ReactiveFormsModule, CommonModule, MatFormFieldModule, MatAutocompleteModule, MatIconModule, MatInputModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  animations: [
    trigger('slideToggleAnimation', [
      state('void', style({ width: '0', opacity: 0 })),
      state('*', style({ width: '*', opacity: 1 })),
      transition(':enter', [
        style({ width: '0', opacity: 0 }),
        animate('1000ms ease-out', style({ width: '*', opacity: 1 }))
      ]),
    ])
  ]
})


export class FormComponent {

  submitbutton:boolean=true;
  updatebutton:boolean=false;
  clearbutton:boolean=false;
  hideFeild:boolean=false;

  constructor(private ser:ServiceService,private router:Router){
    if (this.ser.formtype=='View') {
      this.ser.getById(this.ser.patchId).subscribe(
        (response) => {
             this.registerationForm.patchValue(response);
        },
        (error) => {
          console.error('Error fetching data', error);
        }
      );
      this.hideFeild=false;
      this.submitbutton=false;
      this.updatebutton=false;
      this.clearbutton=true;
    } else if (this.ser.formtype=='Edit') {
      this.ser.getById(this.ser.patchId).subscribe(
        (response) => {
             this.registerationForm.patchValue(response);
        },
        (error) => {
          console.error('Error fetching data', error);
        }
      );
      this.hideFeild=false;
      this.submitbutton=false;
      this.updatebutton=true;
      this.clearbutton=false;
    } else {
      this.hideFeild=true;
      this.submitbutton=true;
      this.updatebutton=false;
      this.clearbutton=false;
    }
   }


  registerationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.registerationForm.invalid) {
      // alert("Fill Form");
    } else {
      console.log(this.registerationForm.value);
     this.ser.adddataToApi(this.registerationForm.value).subscribe();
     this.router.navigate(['/table']);
     this.registerationForm.reset();
    }
  }

  Match: boolean = false;

  typeList: TypeList[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'customer', viewValue: 'customer'},
  ];
  matchPassword(){
    if (this.registerationForm.value.password !== this.registerationForm.value.confirmPassword) {
      this.Match = true;
    } else {
      this.Match =false;
    }
  }

  hide = true;
  clickEvent() {
    this.hide = !this.hide;
  }

  update(){
    this.ser.updateDataByID(this.ser.patchId,this.registerationForm.value).subscribe();
    this.router.navigate(['/table']);
    this.ser.formtype='';
  }

  clear(){
    console.log('view');
    this.router.navigate(['/table']);
    this.ser.formtype='';
  }


}
