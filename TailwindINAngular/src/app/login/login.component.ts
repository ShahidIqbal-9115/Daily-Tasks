import { Component, } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {


  constructor(private router: Router, private services: ServicesService) {

  }

  ngOnInit() {
    // localStorage.setItem('user', JSON.stringify(this.user));
  }


  registerationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  showErroronemail: boolean = false;
  showErroronpass: boolean = false;
  
  onSubmit() {
    if (this.registerationForm.invalid) {
      // alert("Fill Form");
    } else {
      let storeData = this.services.get('tolocal');
      let dataUpdate = this.registerationForm.value;
      storeData.forEach((item: any) => {
        if (item.email == dataUpdate.email) {
          if (item.password == dataUpdate.password) {
            this.router.navigate(['/home']);
            this.services.currentUser=this.registerationForm.value.email;
          }
          this.showErroronpass = true;
          this.showErroronemail = false;
        } else {
          this.showErroronemail = true;
        }
      });

      this.registerationForm.reset();
    }
  }


  hide = true;
  clickEvent() {
    this.hide = !this.hide;
  }

}


